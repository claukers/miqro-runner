import { EventEmitter } from "events";
import { resolve } from "path";
import { runScript, Server } from "./loader";
import { fork, ChildProcess } from "child_process";
import { rejects } from "node:assert";

const logger = console;

export type ModeType = "cluster" | "simple";

export type MiqroStateType = "stopping" | "stopped" | "starting" | "started";

export interface MicroConfigInterface {
  name: string;
  nodes?: number;
  mode?: ModeType;
  service: string;
}

// noinspection SpellCheckingInspection,SpellCheckingInspection,SpellCheckingInspection
export class Miqro extends EventEmitter {
  protected server: Server | undefined;
  private pool: ChildProcess | undefined;
  private restart: NodeJS.Timeout | undefined;
  private state: MiqroStateType = "stopped";

  constructor(protected config: MicroConfigInterface) {
    super();
    this.configure(config);
  }

  public async start(): Promise<void> {
    if (this.state !== "stopped") {
      throw new Error(`cannot start if not stopped!`);
    }
    this.state = "starting";
    if (this.config.mode === "simple") {
      await this.simpleStart();
      this.state = "started";
    } else if (!this.pool) {
      return new Promise((res, rej) => {
        try {
          this.pool = fork(resolve(__dirname, "cluster"), [
            `${this.resolveScriptPath()}`,
            this.config.name,
            this.config.service
          ], {
            env: {
              ...process.env,
              CLUSTER_COUNT: String(this.config.nodes)
            }
          });
          const errorHandler = (e: Error) => {
            if (this.pool)
              this.pool.removeListener("error", errorHandler);
            rej(e);
          };
          this.pool.once("error", errorHandler);
          this.pool.once("exit", (code: number, signal: string) => {
            this.state = "stopped";
            this.emit("stopped", code, signal);
            this.pool = undefined;
          });
          this.pool.removeListener("error", errorHandler);
          this.state = "started";
          res();
        } catch (e) {
          rej(e);
        }
      });
    }
  }

  public isPoolAlive(): boolean {
    if (this.pool) {
      try {
        this.pool.kill(0);
        return true;
      } catch (e) {
        return false;
      }
    } else
      return false;
  }

  public async stop(): Promise<void> {
    if (this.state !== "started") {
      throw new Error(`cannot stop if not started!`);
    }
    this.state = "stopping";
    return new Promise(async (resolve) => {
      if (this.isPoolAlive() && this.pool) {
        this.pool.once("exit", () => {
          this.state = "stopped";
          this.pool = undefined;
          resolve();
        });
        this.pool.kill("SIGTERM");
        this.state = "stopped";
        this.configure(this.config);
      } else if (this.server) {
        await this.simpleStop();
        this.state = "stopped";
        resolve();
      } else {
        resolve();
      }
    });

  }

  protected async simpleStop(): Promise<void> {
    if (this.server) {
      return new Promise((resolve, reject) => {
        if (this.server) {
          this.server.server.close((e?: Error) => {
            if (e) {
              reject(e);
            } else {
              resolve();
            }
          });
        } else {
          return Promise.reject(new Error("not running"));
        }

      });
    } else {
      return Promise.reject(new Error("not running"));
    }
  }

  protected async simpleStart(): Promise<void> {
    this.server = await runScript(this.config.service, this.config.name);
  }

  protected resolveScriptPath(): string {
    return resolve(__dirname, "instance");
  }

  private configure(config: MicroConfigInterface): void {
    if (this.state !== "stopped") {
      throw new Error(`cannot configured if not stopped!`);
    }
    switch (config.mode) {
      case "cluster":
        break;
      case "simple":
        if (config.nodes !== 1) {
          throw new Error(`${config.nodes} not supported in simple mode (try 1 or cluster mode)!`);
        }
        break;
      default:
        throw new Error(`mode ${config.mode} not supported!`);
    }
    this.config = config;
  }
}

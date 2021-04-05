import { EventEmitter } from "events";
import { resolve } from "path";
import { fork, ChildProcess } from "child_process";

export type ClusterState = "stopping" | "stopped" | "starting" | "started";

export interface ClusterConfig {
  nodes?: number;
  disableRestart?: boolean;
  script: string;
}

// noinspection SpellCheckingInspection,SpellCheckingInspection,SpellCheckingInspection
export class ClusterManager extends EventEmitter {
  private pool: ChildProcess | undefined;
  private state: ClusterState = "stopped";

  constructor(protected config: ClusterConfig) {
    super();
    this.configure(config);
  }

  public async start(): Promise<void> {
    if (this.state !== "stopped") {
      throw new Error(`cannot start if not stopped!`);
    }
    this.state = "starting";
    if (!this.pool) {
      return new Promise((res, rej) => {
        try {
          this.pool = fork(resolve(__dirname, "cluster"), [
            this.config.script
          ], {
            env: {
              ...process.env,
              CLUSTER_COUNT: String(this.config.nodes),
              DISABLE_RESTART: this.config.disableRestart ? "true" : "false"
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
      } else {
        this.state = "stopped";
        resolve();
      }
    });
  }

  private configure(config: ClusterConfig): void {
    if (this.state !== "stopped") {
      throw new Error(`cannot configured if not stopped!`);
    }
    config.nodes = config.nodes ? config.nodes : 1;
    this.config = config;
  }
}

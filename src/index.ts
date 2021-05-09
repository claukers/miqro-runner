import { EventEmitter } from "events";
import { resolve } from "path";
import { fork, ChildProcess, Serializable } from "child_process";

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
  private readonly workerMessageHandler: (message: Serializable) => void;

  constructor(protected config: ClusterConfig) {
    super();
    this.configure(config);
    this.workerMessageHandler = (message: Serializable) => {
      if (message && (message as any).error && (message as any).error.message) {
        const error = new Error();
        error.message = (message as any).error.message;
        error.stack = (message as any).error.stack;
        this.emit("error", error);
      } else {
        this.emit("message", message && (message as any).payload, message && (message as any).workerPID);
      }
    };
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
          this.pool.on("message", this.workerMessageHandler);
          this.pool.once("exit", (code: number, signal: string) => {
            this.state = "stopped";
            this.emit("stopped", code, signal);
            if (this.pool) {
              this.pool.removeListener("message", this.workerMessageHandler);
            }
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

  public broadcast(payload: Serializable): boolean {
    return this.send(payload);
  }

  public send(payload: Serializable, workerPID?: number): boolean {
    if (this.isPoolAlive() && this.pool) {
      return this.pool.send({
        workerPID,
        payload
      });
    } else {
      return false;
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
          if (this.pool) {
            this.pool.removeListener("message", this.workerMessageHandler);
          }
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

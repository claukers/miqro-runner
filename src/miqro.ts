import {EventEmitter} from "events";
import {resolve} from "path";
import {createClusterPool, createForkPool} from "script-pool";
import {runInstance, RunInstanceReturn, setupInstance} from "./loader";
import {Logger} from "@miqro/core";
import {Pool} from "generic-pool";

const logger = console;

export type ModeType = "cluster" | "fork" | "simple";

export type MiqroStateType = "stopping" | "stopped" | "starting" | "started";

export interface MicroConfigInterface {
  name: string;
  nodes?: number;
  mode?: ModeType;
  service: string;
}

// noinspection SpellCheckingInspection,SpellCheckingInspection,SpellCheckingInspection
export class Miqro extends EventEmitter {
  protected instanceApp: RunInstanceReturn | undefined;
  protected simpleInstance: { logger: Logger; } | undefined;
  private pool: Pool<any> | undefined;
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
    if (this.pool) {
      await this.pool.start();
      this.state = "started";
      await this.setupAutostartAndBroadcast();
    } else if (this.config.mode === "simple") {
      await this.simpleStart();
      this.state = "started";
    }
  }

  public async stop(): Promise<void> {
    if (this.state !== "started") {
      throw new Error(`cannot stop if not started!`);
    }
    this.state = "stopping";
    if (this.pool) {
      await this.pool.drain();
      await this.pool.clear();
      this.state = "stopped";
      this.configure(this.config);
    } else if (this.instanceApp) {
      await this.simpleStop();
      this.state = "stopped";
    }
  }

  protected async simpleStop(): Promise<void> {
    if (this.instanceApp) {
      return new Promise((resolve, reject) => {
        if (this.instanceApp) {
          this.instanceApp.server.close((e?: Error) => {
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
    this.simpleInstance = setupInstance(this.config.name);
    this.instanceApp = await runInstance(this.simpleInstance.logger, this.config.service);
  }

  protected resolveScriptPath(): string {
    return resolve(__dirname, "instance");
  }

  private configure(config: MicroConfigInterface): void {
    if (this.state !== "stopped") {
      throw new Error(`cannot configured if not stopped!`);
    }
    this.config = config;
    switch (config.mode) {
      case "cluster":
        // noinspection SpellCheckingInspection
        this.pool = createClusterPool({
          min: config.nodes,
          max: config.nodes,
          autostart: false,
          testOnBorrow: true
        }, this.resolveScriptPath(), [config.name, config.service]);
        this.pool.on("factoryCreateError", (err) => {
          this.emit("factoryCreateError", err);
        });
        this.pool.on("factoryDestroyError", (err) => {
          this.emit("factoryDestroyError", err);
        });
        break;
      case "fork":
        if (config.nodes !== 1) {
          throw new Error(`${config.nodes} not supported in fork mode (try 1 or cluster mode)!`);
        }
        // noinspection SpellCheckingInspection
        this.pool = createForkPool({
          min: config.nodes,
          max: config.nodes,
          autostart: false,
          testOnBorrow: true
        }, this.resolveScriptPath(), [config.name, config.service]);
        this.pool.on("factoryCreateError", (err) => {
          this.emit("factoryCreateError", err);
        });
        this.pool.on("factoryDestroyError", (err) => {
          this.emit("factoryDestroyError", err);
        });
        break;
      case "simple":
        if (config.nodes !== 1) {
          throw new Error(`${config.nodes} not supported in simple mode (try 1 or cluster mode)!`);
        }
        break;
      default:
        throw new Error(`mode ${config.mode} not supported!`);
    }
  }

  // noinspection SpellCheckingInspection
  private async setupAutostartAndBroadcast(): Promise<void> {
    if (this.state !== "started") {
      // noinspection SpellCheckingInspection
      throw new Error(`cannot setupAutostart if not started!`);
    }
    const instances: any[] = [];
    if (this.config.nodes && this.pool) {
      for (let node = 0; node < this.config.nodes; node++) {
        const instance = await this.pool.acquire();
        instances.push(instance);
        instance.once("exit", (code: number) => {
          logger.info(`pid ${instance.pid} died with code [${code}]`);
          logger.info(`planning restart in 2000ms`);
          if (this.restart) {
            clearTimeout(this.restart);
          }
          this.restart = setTimeout(async () => {
            logger.info(`restarting dead workers`);
            if (this.state === "started") {
              // noinspection SpellCheckingInspection
              await this.setupAutostartAndBroadcast();
            } else {
              logger.info(`restarting canceled because miqro not started`);
            }
          }, 2000);
        });
      }

      // setup broadcast and release
      for (const instance of instances) {
        try {
          instance.on("message", (msg: any) => {
            for (const other of instances) {
              if (other !== instance) {
                other.send(msg);
              }
            }
          });
        } catch (e) {
          logger.error(e);
        }

        await this.pool.release(instance);
      }
    } else {
      return Promise.reject(new Error("cannot call setupAutostartAndBroadcast without a pool"));
    }
  }
}

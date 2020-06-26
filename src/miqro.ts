import {EventEmitter} from "events";
import {resolve} from "path";
import {runInstance, setupInstance} from "./loader";
import {Logger, Util} from "@miqro/core";

const scriptPoolModule = "script-pool";

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
  protected instanceApp;
  protected simpleInstance: { logger: Logger } = null;
  private pool;
  private restart = null;
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
    this.instanceApp.server.close();
  }

  protected async simpleStart(): Promise<void> {
    this.simpleInstance = setupInstance(this.config.name);
    this.instanceApp = await runInstance(this.simpleInstance.logger, this.config.service);
  }

  protected resolveScriptPath(): string {
    return resolve(__dirname, "instance");
  }

  private configure(config): void {
    if (this.state !== "stopped") {
      throw new Error(`cannot configured if not stopped!`);
    }
    this.config = config;
    switch (config.mode) {
      case "cluster":
        Util.checkModules([scriptPoolModule]);
        const {createClusterPool} = require(scriptPoolModule);
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
        Util.checkModules([scriptPoolModule]);
        const {createForkPool} = require(scriptPoolModule);
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
    const instances = [];
    for (let node = 0; node < this.config.nodes; node++) {
      const instance = await this.pool.acquire();
      instances.push(instance);
      instance.once("exit", (code) => {
        logger.info(`pid ${instance.pid} died with code [${code}]`);
        logger.info(`planning restart in 2000ms`);
        clearTimeout(this.restart);
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
        instance.on("message", (msg) => {
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
  }
}

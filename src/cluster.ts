#!/usr/bin/env node

import { fork } from "cluster";
import cluster, { Worker } from "cluster";
import { resolve } from "path";
import { Serializable } from "child_process";

const logger = console;
const count = parseInt(process.env.CLUSTER_COUNT ? process.env.CLUSTER_COUNT : "1", 10);
const disableRestart: boolean = process.env.DISABLE_RESTART ? process.env.DISABLE_RESTART === "true" : false;
if (process.argv.length < 3) {
  logger.error(`usage: CLUSTER_COUNT=1 [DISABLE_RESTART=true|false] npx @miqro/runner <script> [...args]`);
  process.exit(20);
}
const script = process.argv[2];
const path = resolve(script);
// const args = process.argv.slice(3);

const instanceMap: {
  [pid: string]: Worker
} = {};

const forkAutoRestart = (restart = true): Worker => {
  let PID: number | undefined = undefined;
  try {
    const instance = fork();
    PID = instance.process.pid;
    instanceMap[PID] = instance;
    logger.info(`new fork ${instance.process.pid} ${restart}`);
    if (process.send) {
      instance.on("message", (payload: Serializable) => {
        // console.log("receive payload" + require("util").inspect(payload));
        if (process.send) {
          try {
            process.send({
              workerPID: instance && instance.process ? instance.process.pid : null,
              payload
            });
          } catch (e) {
            console.error(e);
          }
        }
      });
    }

    if (restart) {
      // console.log("setting up restart for " + PID);
      instance.once("exit", (code: number, signal: string) => {
        delete instanceMap[PID as number];
        if (code !== 0 && code !== undefined) {
          // restart
          logger.error(`process ${PID} exited with ${code} ${signal} restaring in 10ms`);
          setTimeout(() => {
            forkAutoRestart();
          }, 10);
        }
      });
    }
    return instance;
  } catch (e) {
    if (PID !== undefined) {
      delete instanceMap[PID];
    }
    logger.error(e);
    process.exit(100);
  }

}

if (cluster.isMaster) {
  for (let i = 0; i < count; i++) {
    if (disableRestart) {
      try {
        forkAutoRestart(false);
      } catch (e) {
        logger.error(e);
        process.exit(10);
      }
    } else {
      forkAutoRestart(true);
    }
  }
  // listen for broadcast and specifid send
  if (process.send) {
    process.on("message", (message: { workerPID?: number; payload: Serializable }) => {
      const { workerPID, payload } = message;
      // console.log("receive " + require("util").inspect(message));
      if (workerPID === undefined) {
        const PIDS = Object.keys(instanceMap);
        for (const PID of PIDS) {
          try {
            instanceMap[PID].send(payload)
          } catch (e) {
            if (process.send) {
              process.send({
                error: {
                  message: String(e.message),
                  stack: String(e.stack)
                }
              });
            }
          }
        }
      } else {
        try {
          if (!instanceMap[String(workerPID)]) {
            throw new Error(`worker with PID [${workerPID}] not found`);
          } else {
            instanceMap[String(workerPID)].send(payload)
          }
        } catch (e) {
          if (process.send) {
            process.send({
              error: {
                message: String(e.message),
                stack: String(e.stack)
              }
            });
          }
        }
      }
    });
  }
} else {
  try {
    require(path);
  } catch (e) {
    logger.error(e);
    process.exit(20);
  }
}

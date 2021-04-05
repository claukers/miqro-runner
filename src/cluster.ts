#!/usr/bin/env node

import { fork } from "cluster";
import cluster from "cluster";
import { resolve } from "path";

const logger = console;
const count = parseInt(process.env.CLUSTER_COUNT ? process.env.CLUSTER_COUNT : "1", 10);
const disableRestart = process.env.DISABLE_RESTART ? process.env.DISABLE_RESTART : "false";
if (process.argv.length < 3) {
  logger.error(`usage: CLUSTER_COUNT=1 [DISABLE_RESTART=true|false] npx @miqro/runner <script> [...args]`);
  process.exit(20);
}
const script = process.argv[2];
const path = resolve(script);
// const args = process.argv.slice(3);

const forkAutoRestart = (): void => {
  try {
    const instance = fork();
    logger.info(`new fork ${instance.process.pid}`);
    instance.once("exit", (code: number, signal: string) => {
      if (code !== 0 && code !== undefined) {
        // restart
        logger.error(`process ${instance.process.pid} exited with ${code} ${signal} restaring in 10ms`);
        setTimeout(() => {
          forkAutoRestart();
        }, 10);
      }
    });
  } catch (e) {
    logger.error(e);
    process.exit(10);
  }
}

if (cluster.isMaster) {
  for (let i = 0; i < count; i++) {
    if(disableRestart) {
      try {
        const instance = fork();
        logger.info(`new fork ${instance.process.pid}`);
      } catch(e) {
        logger.error(e);
        process.exit(10);
      }
    } else {
      forkAutoRestart();
    }
  }
} else {

  // logger.info(`require ${path}`);
  try {
    require(path);
  } catch (e) {
    logger.error(e);
    process.exit(20);
  }
}

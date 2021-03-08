import { checkEnvVariables, getLogger } from "@miqro/core";
import { fork } from "cluster";
import cluster from "cluster";
import { resolve } from "path";
import { existsSync } from "fs";

const logger = getLogger("cluster.js");
const count = parseInt(checkEnvVariables(["CLUSTER_COUNT"], ["1"])[0], 10);
if (process.argv.length < 3) {
  throw new Error(`usage: CLUSTER_COUNT=1 node cluster.js <script> [...args]`);
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
    process.exit(10);
  }
}

if (cluster.isMaster) {
  for (let i = 0; i < count; i++) {
    forkAutoRestart();
  }
} else {

  // logger.info(`require ${path}`);
  try {
    require(path);
  } catch (e) {
    process.exit(20);
  }
}

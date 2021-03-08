import { checkEnvVariables, getLogger } from "@miqro/core";
import { fork } from "cluster";
import cluster from "cluster";
import { resolve } from "path";

const logger = getLogger("cluster.js");
const count = parseInt(checkEnvVariables(["CLUSTER_COUNT"], ["1"])[0], 10);
if (process.argv.length < 3) {
  throw new Error(`usage: CLUSTER_COUNT=1 node cluster.js <script> [...args]`);
}
const script = process.argv[2];
// const args = process.argv.slice(3);

const forkAutoRestart = (): void => {
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
}

if (cluster.isMaster) {
  for (let i = 0; i < count; i++) {
    forkAutoRestart();
  }
} else {
  const path = resolve(script);
  // logger.info(`require ${path}`);
  require(path);
}

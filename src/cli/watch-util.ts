import * as cp from "child_process";
import * as path from "path";
import * as watch from "watch";
import {startArgs} from "./startargs";

const usage = `usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>`;

const {nodes, mode, logger, service} = startArgs(usage);

const serviceDirname = path.resolve(path.dirname(service));

let proc = null;

let restartTimeout = null;
const restart = (cmd: string, silent?) => {
  if (!silent) {
    logger.warn("restart queue");
  }
  clearTimeout(restartTimeout);
  restartTimeout = setTimeout(async () => {
    if (!silent) {
      logger.warn("restarting");
    }
    const start = () => {
      logger.log("running");
      proc = cp.spawn("node", [path.resolve(__dirname, "cli.js"), cmd, nodes, mode, service], {
        env: process.env,
        windowsHide: true
      });
      proc.stdout.pipe(process.stdout);
      proc.stderr.pipe(process.stderr);
      proc.on("close", (code) => {
        logger.log(`exited with code ${code}`);
        proc = null;
      });
    };
    if (proc) {
      try {
        proc.kill(0);
      } catch (e) {
        logger.error(e);
      }
      proc.once("close", () => {
        start();
      });
      proc.kill("SIGINT");
      proc = null;
    } else {
      start();
    }
  }, silent ? 0 : 1000);
};

export const startWatch = (cmd: string) => {
  logger.log(`watching ${serviceDirname}`);
  setTimeout(() => {
    restart(cmd, true);
  }, 0);
  watch.watchTree(serviceDirname, (f, curr, prev) => {
    let ext = "";
    let basedir = "";
    let dirName = "";
    try {
      if (typeof f === "string") {
        ext = path.extname(f);
        basedir = path.dirname(f);
        dirName = path.basename(basedir);
        if (dirName !== "logs" && ext !== ".log") {
          if (typeof f === "object" && prev === null && curr === null) {
            // Finished walking the tree
          } else if (prev === null) {
            // f is a new file
            logger.log(`${f} new file`);
            restart(cmd);
          } else if (curr.nlink === 0) {
            // f was removed
            logger.log(`${f} removed`);
            restart(cmd);
          } else {
            // f was changed
            logger.log(`change in ${f}`);
            restart(cmd);
          }
        }
      }
    } catch (e) {
      logger.error(e);
    }
  });
};

import {ChildProcessWithoutNullStreams, spawn} from "child_process";
import {basename, dirname, extname, join, resolve} from "path";
import {existsSync, FSWatcher, readdirSync, statSync, watch} from "fs";
import {startArgs} from "./startargs";

const usage = `usage: miqro-runner watch [nodes=1] [mode=simple] <microservice.js>`;

const {nodes, mode, logger, service} = startArgs(usage);

const serviceDirname = statSync(resolve(service)).isDirectory() ? resolve(service) : resolve(dirname(service));

let proc: ChildProcessWithoutNullStreams | null;

const watches: FSWatcher[] = [];
const TIMEOUT = 5000;

let restartTimeout: NodeJS.Timeout;

const walkSync = (dir: string, list: string[] = []): string[] => {
  readdirSync(dir).forEach(file => {

    list = statSync(join(dir, file)).isDirectory()
      ? walkSync(join(dir, file), list)
      : list.concat(join(dir, file));

  });
  return list;
}

const watchTree = (dirname: string, cb: (event: string, filename: string) => void): void => {
  for (const watcher of watches) {
    watcher.close();
  }
  watches.splice(0, watches.length);
  const files = walkSync(dirname);
  for (const file of files) {
    watches.push(watch(file, cb));
  }
};

const restart = (cmd: string, silent?: boolean): void => {
  if (!silent && restartTimeout === null) {
    logger.warn(`change detected restarting in ${TIMEOUT}ms`);
  }
  clearTimeout(restartTimeout);
  restartTimeout = setTimeout(async () => {
    if (!silent) {
      logger.warn("restarting");
    }
    if (!existsSync(serviceDirname)) {
      logger.warn(`${serviceDirname} doesnt exists waiting...`);
      restart(cmd, silent);
      return;
    } else {
      const start = (): void => {
        logger.log("running");
        proc = spawn("node", [resolve(__dirname, "cli.js"), cmd, `${nodes}`, mode, service], {
          env: process.env,
          windowsHide: true
        });
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on("close", (code) => {
          logger.log(`exited with code ${code}`);
          proc = null;
        });
        watchTree(serviceDirname, (event, f): void => {
          let ext = "";
          let basedir = "";
          let dirName = "";
          try {
            if (typeof f === "string") {
              ext = extname(f);
              basedir = dirname(f);
              dirName = basename(basedir);
              if (dirName !== "logs" && ext !== ".log") {
                restart(cmd);
              }
            }
          } catch (e) {
            logger.error(e);
          }
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
    }
  }, silent ? 0 : TIMEOUT);
};

export const startWatch = (cmd: string): void => {
  logger.log(`watching ${serviceDirname}`);
  setTimeout(() => {
    restart(cmd, true);
  }, 0);
};

"use strict";

import {ConfigPathResolver, Logger, Util} from "@miqro/core";
import {readFileSync} from "fs";
import {createServer as httpCreateServer, Server as HttpServer} from "http";
import {createServer as httpsCreateServer, Server as HttpsServer} from "https";
import {resolve as pathResolve} from "path";
import express, {Express} from "express";
import {APIRouter, ErrorHandler, setupMiddleware} from "@miqro/handlers";

export const setupInstance = (serviceName: string): { logger: Logger } => {
  // Util.setupInstanceEnv(serviceName, scriptPath);
  process.env.MIQRO_DIRNAME = process.env.MIQRO_DIRNAME ? process.env.MIQRO_DIRNAME : ConfigPathResolver.getBaseDirname();
  Util.setupSimpleEnv();
  Util.loadConfig();
  if (!ConfigPathResolver.getServiceName()) {
    if (serviceName) {
      Util.setServiceName(serviceName);
    }
  }
  const name = ConfigPathResolver.getServiceName();
  const logger = Util.getLogger(`${name ? name : ""}`);
  logger.debug(`config loaded from [${process.env.MIQRO_DIRNAME}]`);
  return {
    logger
  };
};

export interface RunInstanceReturn {
  app: Express;
  server: HttpsServer | HttpServer
}

export const runAPI = (logger: Logger, apiPath: string): Promise<RunInstanceReturn> => {
  return runModule(logger, async (app: Express) => {
    app.use(APIRouter({
      dirname: apiPath
    }, logger));
    app.use(ErrorHandler(logger));
    return app;
  });
}

export const runInstance = async (logger: Logger, scriptPath: string): Promise<RunInstanceReturn> => {
  logger.debug(`loading script from [${scriptPath}]!`);
  /* eslint-disable  @typescript-eslint/no-var-requires */
  return runModule(logger, require(scriptPath));
};

export const runModule = async (logger: Logger, script: unknown): Promise<RunInstanceReturn> => {
  Util.checkEnvVariables(["PORT", "HTTPS_ENABLE"]);
  return new Promise(async (resolve, reject) => {
    try {
      if ((script as any).default && (script as any).__esModule === true) {
        script = (script as any).default;
      }
      if (typeof script !== "function") {
        reject(new Error(`script not a function`));
      } else {
        logger.debug(`launching script`);
        const app: Express = express();
        let server: HttpServer | HttpsServer;
        if (process.env.HTTPS_ENABLE === "true") {
          logger.info(`HTTPS enabled`);
          Util.checkEnvVariables(["HTTPS_KEY", "HTTPS_CERT", "HTTPS_CA"]);
          const key = readFileSync(pathResolve(process.env.HTTPS_KEY as string), "utf8");
          const cert = readFileSync(pathResolve(process.env.HTTPS_CERT as string), "utf8");
          const ca = readFileSync(pathResolve(process.env.HTTPS_CA as string), "utf8");
          server = httpsCreateServer({key, cert, ca}, app);
        } else {
          server = httpCreateServer(app);
        }
        setupMiddleware(app, logger);
        await script(app, server);
        const errorHandler = (err: Error): void => {
          reject(err);
        };
        server.once("error", errorHandler);
        server.listen(process.env.PORT, () => {
          logger.info(`script started on [${process.env.PORT}]`);
          if (server) {
            server.removeListener("error", errorHandler);
          }
          let cleaningUp = false;
          const cleanUp = (): void => {
            if (!cleaningUp) {
              logger.info("cleaning up");
              if (server) {
                server.once("close", async () => {
                  logger.info("clean up");
                });
                server.close();
              }
            }
            cleaningUp = true;
          };
          logger.debug("setting up clean up handlers");
          process.on("SIGINT", cleanUp);
          process.on("SIGTERM", cleanUp);
          resolve({app, server});
        });
      }
    } catch (e) {
      logger.error(e);
      logger.error(e.stack);
      reject(e);
    }
  });
};

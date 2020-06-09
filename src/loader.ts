"use strict";

import {ConfigPathResolver, Util} from "@miqro/core";
import {Logger} from "winston";
import {setupMiddleware} from "@miqro/handlers";
import * as express from "express";
import {readFileSync} from "fs";
import {createServer as httpCreateServer} from "http";
import {createServer as httpsCreateServer} from "https";
import {resolve as pathResolve} from "path";

export const setupInstance = (serviceName: string): { logger: Logger } => {
  // Util.setupInstanceEnv(serviceName, scriptPath);
  process.env.MIQRO_DIRNAME = process.env.MIQRO_DIRNAME ? process.env.MIQRO_DIRNAME : ConfigPathResolver.getBaseDirname();
  Util.setupSimpleEnv();
  Util.loadConfig();
  if (!ConfigPathResolver.getServiceName()) {
    if (serviceName) {
      ConfigPathResolver.setServiceName(serviceName);
    }
  }
  const name = ConfigPathResolver.getServiceName();
  const logger = Util.getLogger(`${name ? name : ""}`);
  logger.debug(`config loaded from [${process.env.MIQRO_DIRNAME}]`);
  return {
    logger
  };
};

export const runInstance = async (logger: Logger, scriptPath: string): Promise<{ app: any; server: any }> => {
  Util.checkEnvVariables(["PORT", "HTTPS_ENABLE"]);
  return new Promise(async (resolve, reject) => {
    try {
      logger.debug(`loading script from [${scriptPath}]!`);
      /* eslint-disable  @typescript-eslint/no-var-requires */
      const script = require(scriptPath);
      logger.debug(`launching script`);
      const app = express();
      let server = null;
      if (process.env.HTTPS_ENABLE === "true") {
        logger.info(`HTTPS enabled`);
        Util.checkEnvVariables(["HTTPS_KEY", "HTTPS_CERT", "HTTPS_CA"]);
        const key = readFileSync(pathResolve(process.env.HTTPS_KEY), "utf8");
        const cert = readFileSync(pathResolve(process.env.HTTPS_CERT), "utf8");
        const ca = readFileSync(pathResolve(process.env.HTTPS_CA), "utf8");
        server = httpsCreateServer({key, cert, ca}, app);
      } else {
        server = httpCreateServer(app);
      }
      await script(await setupMiddleware(app, logger), server);
      const errorHandler = (err): void => {
        reject(err);
      };
      server.once("error", errorHandler);
      server.listen(process.env.PORT, () => {
        logger.info(`script started on [${process.env.PORT}]`);
        server.removeListener("error", errorHandler);
        let cleaningUp = false;
        const cleanUp = (): void => {
          if (!cleaningUp) {
            logger.info("cleaning up");
            server.once("close", async () => {
              logger.info("clean up");
            });
            server.close();
          }
          cleaningUp = true;
        };
        logger.debug("setting up clean up handlers");
        process.on("SIGINT", cleanUp);
        process.on("SIGTERM", cleanUp);
        resolve({app, server});
      });
    } catch (e) {
      logger.error(e);
      logger.error(e.stack);
      reject(e);
    }
  });
};

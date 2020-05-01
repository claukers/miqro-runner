"use strict";

import {ConfigPathResolver, Util} from "@miqro/core";
import {setupMiddleware} from "@miqro/handlers";
import * as express from "express";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import * as  path from "path";

export const setupInstance = (serviceName, scriptPath): any => {
  // Util.setupInstanceEnv(serviceName, scriptPath);
  process.env.MIQRO_DIRNAME = process.env.MIQRO_DIRNAME ? process.env.MIQRO_DIRNAME : ConfigPathResolver.getBaseDirname();
  Util.setupSimpleEnv();
  Util.loadConfig();
  const logger = Util.getLogger(`${process.env.MIQRO_SERVICE_NAME ? process.env.MIQRO_SERVICE_NAME : serviceName}`);
  logger.info(`config loaded from [${process.env.MIQRO_DIRNAME}]`);
  logger.info(`loading script from [${scriptPath}]!`);
  /* tslint:disable */
  /* eslint-disable  @typescript-eslint/no-var-requires */
  const script = require(scriptPath);
  /* tslint:enable */
  return {
    script,
    logger
  };
};

export const runInstance = async (logger, script): Promise<{ app: any; server: any }> => {
  Util.checkEnvVariables(["PORT", "HTTPS_ENABLE"]);
  return new Promise(async (resolve, reject) => {
    try {
      logger.info(`launching script`);
      const app = express();
      let server = null;
      if (process.env.HTTPS_ENABLE === "true") {
        logger.info(`HTTPS enabled`);
        Util.checkEnvVariables(["HTTPS_KEY", "HTTPS_CERT", "HTTPS_CA"]);
        const key = fs.readFileSync(path.resolve(process.env.HTTPS_KEY), "utf8");
        const cert = fs.readFileSync(path.resolve(process.env.HTTPS_CERT), "utf8");
        const ca = fs.readFileSync(path.resolve(process.env.HTTPS_CA), "utf8");
        server = https.createServer({key, cert, ca}, app);
      } else {
        server = http.createServer(app);
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

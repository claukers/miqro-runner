"use strict";

import * as express from "express";
import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import { Util } from "miqro-core";
import { setupMiddleware } from "miqro-express";
import * as  path from "path";

export const setupInstance = (serviceName, scriptPath): any => {
  Util.setupInstanceEnv(serviceName, scriptPath);
  Util.loadConfig();
  const logger = Util.getLogger(`${serviceName}`);
  logger.info(`config loaded from [${process.env.MIQRO_DIRNAME}]`);
  logger.info(`loading script from [${scriptPath}]!`);
  /* tslint:disable */
  const script = require(scriptPath);
  /* tslint:enable */
  return {
    script,
    logger
  };
};

export const runInstance = async (logger, script, scriptPath) => {
  Util.checkEnvVariables(["PORT", "HTTPS_ENABLE"]);
  return new Promise(async (resolve, reject) => {
    try {
      logger.info(`launching script`);
      const app = await script(await setupMiddleware(express(), logger));
      const errorHandler = (err) => {
        reject(err);
      };
      let server = null;
      if (process.env.HTTPS_ENABLE === "true") {
        logger.info(`HTTPS enabled`);
        Util.checkEnvVariables(["HTTPS_KEY", "HTTPS_CERT", "HTTPS_CA"]);
        const key = fs.readFileSync(path.resolve(process.env.HTTPS_KEY), "utf8");
        const cert = fs.readFileSync(path.resolve(process.env.HTTPS_CERT), "utf8");
        const ca = fs.readFileSync(path.resolve(process.env.HTTPS_CA), "utf8");
        server = https.createServer({ key, cert, ca }, app);
      } else {
        server = http.createServer(app);
      }
      server.once("error", errorHandler);
      server.listen(process.env.PORT, () => {
        logger.info(`script started on [${process.env.PORT}]`);
        server.removeListener("error", errorHandler);
        let cleaningUp = false;
        const cleanUp = () => {
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
        resolve({ app, server });
      });
    } catch (e) {
      logger.error(e);
      logger.error(e.stack);
      reject(e);
    }
  });
};

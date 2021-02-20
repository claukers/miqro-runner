"use strict";

import { ConfigPathResolver, FeatureToggle, initLoggerFactory, Logger, Util } from "@miqro/core";
import { readFileSync } from "fs";
import { createServer as httpCreateServer, Server as HttpServer } from "http";
import { createServer as httpsCreateServer, Server as HttpsServer } from "https";
import { resolve as pathResolve } from "path";
import express, { Express } from "express";
import { AuditErrorHandler, AuditHandler } from "@miqro/modelhandlers";
import { Database } from "@miqro/database";
import { APIRouter, ErrorHandler, setupMiddleware } from "@miqro/handlers";

export const setupInstance = (serviceName?: string): Logger => {
  // Util.setupInstanceEnv(serviceName, scriptPath);
  process.env.MIQRO_DIRNAME = process.env.MIQRO_DIRNAME ? process.env.MIQRO_DIRNAME : ConfigPathResolver.getBaseDirname();
  Util.setupNodeEnv();
  Util.loadConfig();
  if (!ConfigPathResolver.getServiceName()) {
    if (serviceName) {
      Util.setServiceName(serviceName);
    }
  }
  initLoggerFactory();
  const name = ConfigPathResolver.getServiceName();
  const logger = Util.getLogger(`${name ? name : ""}`);
  logger.debug(`config loaded from [${process.env.MIQRO_DIRNAME}]`);
  return logger;
};

export interface Server {
  app: Express;
  server: HttpsServer | HttpServer;
  logger: Logger;
}

export const runAPI = (apiPath: string, serviceName?: string): Promise<Server> => {
  return runServer(async (app, server, logger) => {
    if (FeatureToggle.isFeatureEnabled("AUDIT", false)) {
      app.use(AuditHandler("audit", Database.getInstance(), logger));
    }
    app.use(APIRouter({
      dirname: apiPath
    }, logger));
    if (FeatureToggle.isFeatureEnabled("AUDIT", false)) {
      app.use(AuditErrorHandler(logger));
    }
    app.use(ErrorHandler(undefined, logger));
  }, serviceName);
};

export const runScript = async (scriptPath: string, serviceName?: string): Promise<Server> => {
  /* eslint-disable  @typescript-eslint/no-var-requires */
  let script = require(scriptPath);
  if ((script as any).default && (script as any).__esModule === true) {
    script = (script as any).default;
  }
  return runServer(script, serviceName);
};

export type ServerFunction = (
  app: Express,
  server: HttpsServer | HttpServer,
  logger: Logger
) => Promise<void>;

export const runServer = async (script: ServerFunction, serviceName?: string): Promise<Server> => {
  const [port, httpsEnable] = Util.checkEnvVariables(["PORT", "HTTPS_ENABLE"], ["8080", "false"]);
  return new Promise(async (resolve, reject) => {
    const logger = setupInstance(serviceName);
    try {
      if (typeof script !== "function") {
        reject(new Error(`script not a function`));
      } else {
        logger.debug(`launching script`);
        const app: Express = express();
        let server: HttpServer | HttpsServer | null;
        if (httpsEnable === "true") {
          logger.info(`HTTPS enabled`);
          Util.checkEnvVariables(["HTTPS_KEY", "HTTPS_CERT", "HTTPS_CA"]);
          const key = readFileSync(pathResolve(process.env.HTTPS_KEY as string), "utf8");
          const cert = readFileSync(pathResolve(process.env.HTTPS_CERT as string), "utf8");
          const ca = readFileSync(pathResolve(process.env.HTTPS_CA as string), "utf8");
          server = httpsCreateServer({ key, cert, ca }, app);
        } else {
          server = httpCreateServer(app);
        }
        setupMiddleware(app, logger);
        await script(app, server, logger);
        const errorHandler = (err: Error): void => {
          reject(err);
        };
        server.once("error", errorHandler);
        server.listen(port, () => {
          logger.info(`script started on [${port}]`);
          resolve({ app, server: server as HttpServer, logger });
        });
      }
    } catch (e) {
      logger.error(e);
      logger.error(e.stack);
      reject(e);
    }
  });
};

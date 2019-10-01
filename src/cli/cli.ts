#!/usr/bin/env node

import { ISimpleMap } from "miqro-core";

const logger = console;

const cmds: ISimpleMap<{ module: string; description: string }> = {
  start: { module: "./start", description: "starts a microservice" },
  watch: { module: "./watch", description: "starts a microservice in watch mode on the service dir" },
  version: { module: "./version", description: "prints miqro version." }
};

const main = async () => {
  const cmdArg = process.argv[2];
  if (!cmdArg) {
    logger.info(`usage: miqro-runner <command> [args]`);
    logger.info(`Available commands:`);
    for (const cmd of Object.keys(cmds)) {
      logger.info(`\t${cmd}\t${cmds[cmd].description}`);
    }
    throw new Error("no command");
  } else {
    const cmd = cmds[cmdArg];
    if (!cmd) {
      logger.info(`Available commands:`);
      for (const cmdName of Object.keys(cmds)) {
        logger.info(`\t${cmdName}\t${cmds[cmdName].description}`);
      }
      throw new Error("command " + cmdArg + " not found!");
    } else {
      try {
        require(cmd.module);
      } catch (e) {
        logger.error(e.message);
        process.exit(1);
      }
    }
  }
};

main().catch((e) => {
  logger.error(`usage: miqro-runner <command> [args]`);
  logger.error(e.message);
  process.exit(1);
});

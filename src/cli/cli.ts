#!/usr/bin/env node

import {CLIUtil} from "miqro-core";
import {resolve} from "path";

// noinspection SpellCheckingInspection
CLIUtil.cliFlow({
  start: {module: resolve(__dirname, "start"), description: "starts a microservice"},
  watch: {module: resolve(__dirname, "watch"), description: "starts a microservice in watch mode on the service dir"},
  version: {module: resolve(__dirname, "version"), description: "prints miqro-runner version."}
}, "miqro-runner", console);

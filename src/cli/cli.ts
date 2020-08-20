#!/usr/bin/env node

import {CLIUtil} from "@miqro/core";
import {resolve} from "path";

// noinspection SpellCheckingInspection
CLIUtil.cliFlow({
  start: {module: resolve(__dirname, "start"), description: "\tstarts a microservice"},
  ["start-script"]: {module: resolve(__dirname, "start-script"), description: "starts a script"},
  ["start-api"]: {module: resolve(__dirname, "start-api"), description: "starts an apirouter on a directory"},
  watch: {module: resolve(__dirname, "watch"), description: "\tstarts a microservice in watch mode on the service dir"},
  ["watch-script"]: {module: resolve(__dirname, "watch-script"), description: "starts a script in watch mode on the script dir"},
  version: {module: resolve(__dirname, "version"), description: "\tprints miqro-runner version."}
}, "miqro-runner", console);

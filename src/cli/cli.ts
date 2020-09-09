#!/usr/bin/env node

import {CLIUtil} from "@miqro/core";
import {main as start} from "./start";
import {main as startScript} from "./start-script";
import {main as startApi} from "./start-api";
import {main as watch} from "./watch";
import {main as watchScript} from "./watch-script";
import {main as version} from "./version";

// noinspection SpellCheckingInspection
CLIUtil.cliFlow({
  start: {cb: start, description: "\tstarts a microservice"},
  ["start-script"]: {cb: startScript, description: "starts a script"},
  ["start-api"]: {cb: startApi, description: "starts an apirouter on a directory"},
  watch: {cb: watch, description: "\tstarts a microservice in watch mode on the service dir"},
  ["watch-script"]: {cb: watchScript, description: "starts a script in watch mode on the script dir"},
  version: {cb: version, description: "\tprints miqro-runner version."}
}, "miqro-runner", console);

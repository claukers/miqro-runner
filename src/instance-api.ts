import {resolve} from "path";
import {runAPI, setupInstance} from "./loader";

const serviceName = process.argv[process.argv.length - 2];
const apiPath = resolve(process.argv[process.argv.length - 1]);
const {logger} = setupInstance(serviceName);
runAPI(logger, apiPath).catch((e) => {
  logger.error(e);
});

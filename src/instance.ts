import {resolve} from "path";
import {runInstance, setupInstance} from "./loader";

const serviceName = process.argv[process.argv.length - 2];
const scriptPath = resolve(process.argv[process.argv.length - 1]);
const {script, logger} = setupInstance(serviceName, scriptPath);
runInstance(logger, script).catch((e) => {
  logger.error(e);
});

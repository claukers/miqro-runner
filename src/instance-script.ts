import {resolve} from "path";
import {setupInstance} from "./loader";

const serviceName = process.argv[process.argv.length - 2];
const scriptPath = resolve(process.argv[process.argv.length - 1]);
setupInstance(serviceName);
require(scriptPath);

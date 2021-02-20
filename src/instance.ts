import { resolve } from "path";
import { runScript } from "./loader";

const serviceName = process.argv[process.argv.length - 2];
const scriptPath = resolve(process.argv[process.argv.length - 1]);
runScript(scriptPath, serviceName).catch((e) => {
  console.error(e);
})

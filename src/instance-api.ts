import { resolve } from "path";
import { runAPI } from "./loader";

const serviceName = process.argv[process.argv.length - 2];
const apiPath = resolve(process.argv[process.argv.length - 1]);
runAPI(apiPath, serviceName).catch((e) => {
  console.error(e);
});

import * as fs from "fs";
import * as path from "path";

// tslint:disable-next-line:no-console
console.log(JSON.parse(fs.readFileSync(path.resolve(__dirname, "..", "..", "package.json")).toString()).version);

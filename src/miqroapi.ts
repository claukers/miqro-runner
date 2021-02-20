import { resolve } from "path";
import { Miqro } from "./miqro";
import { runAPI } from "./loader";

export class MiqroAPI extends Miqro {
  protected async simpleStart(): Promise<void> {
    this.server = await runAPI(this.config.service, this.config.name);
  }

  protected resolveScriptPath(): string {
    return resolve(__dirname, "instance-api");
  }
}

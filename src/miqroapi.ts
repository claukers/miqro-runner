import {resolve} from "path";
import {Miqro} from "./miqro";
import {runAPI, setupInstance} from "./loader";

export class MiqroAPI extends Miqro {
  protected async simpleStop(): Promise<void> {
    // nothing to do here
  }

  protected async simpleStart(): Promise<void> {
    this.simpleInstance = setupInstance(this.config.name);
    this.instanceApp = await runAPI(this.simpleInstance.logger, this.config.service);
  }

  protected resolveScriptPath(): string {
    return resolve(__dirname, "instance-api");
  }
}

import {resolve} from "path";
import {Miqro} from "./miqro";
import {runInstance, setupInstance} from "./loader";

export class MiqroScript extends Miqro {
  protected async simpleStop(): Promise<void> {
    // nothing to do here
  }

  protected async simpleStart(): Promise<void> {
    this.simpleInstance = setupInstance(this.config.name);
    this.instanceApp = await runInstance(this.simpleInstance.logger, this.config.service);
  }

  protected resolveScriptPath(): string {
    return resolve(__dirname, "instance-script");
  }
}

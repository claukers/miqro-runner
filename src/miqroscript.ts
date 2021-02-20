import { resolve } from "path";
import { setupInstance } from "./loader";
import { Miqro } from "./miqro";

export class MiqroScript extends Miqro {
  protected async simpleStop(): Promise<void> {
    // nothing to do here
  }

  protected async simpleStart(): Promise<void> {
    setupInstance(this.config.name);
    require(this.config.service);
  }

  protected resolveScriptPath(): string {
    return resolve(__dirname, "instance-script");
  }
}

import {resolve} from "path";
import {Miqro} from "./miqro";

export class MiqroScript extends Miqro {
  protected async simpleStop(): Promise<void> {
    // nothing to do here
  }

  protected async simpleStart(): Promise<void> {
    require(this.config.service);
  }

  protected resolveScriptPath(): string {
    return resolve(this.config.service);
  }
}

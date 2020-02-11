import {resolve} from "path";
import {runInstance, setupInstance} from "./loader";
import {Miqro} from "./miqro";

export class MiqroScript extends Miqro {
  protected async simpleStop() {
    // nothing to do here
  }

  protected async simpleStart() {
    require(this.config.service);
  }

  protected resolveScriptPath() {
    return resolve(this.config.service);
  }
}

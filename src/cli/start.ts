import {Miqro} from "../miqro";
import {startArgs} from "./startargs";

export const main = () => {
  const usage = `usage: miqro start [nodes=1] [mode=simple] <microservice.js>`;

  const {nodes, mode, name, logger, service} = startArgs(usage);

  const micro = new Miqro({
    name,
    service,
    nodes,
    mode: mode as any
  });

  micro.start().catch((e) => {
    logger.error(e);
  });
}

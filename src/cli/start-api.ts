import {startArgs} from "./startargs";
import {MiqroAPI} from "../miqroapi";

export const main = (): void => {
  const usage = `usage: npx miqro runner:start-script [nodes=1] [mode=simple|fork|cluster] <script.js>`;

  const {nodes, mode, name, logger, service} = startArgs(usage);

  const micro = new MiqroAPI({
    name,
    service,
    nodes,
    mode: mode as any
  });

  micro.start().catch((e) => {
    logger.error(e);
  });
}

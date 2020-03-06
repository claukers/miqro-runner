import {MiqroScript} from "../miqroscript";
import {startArgs} from "./startargs";

const usage = `usage: miqro start-script [nodes=1] [mode=simple|fork|cluster] <script.js>`;

const {nodes, mode, name, logger, service} = startArgs(usage);

const micro = new MiqroScript({
  name,
  service,
  nodes,
  mode: mode as any
});

micro.start().catch((e) => {
  logger.error(e);
});

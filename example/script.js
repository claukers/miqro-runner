const {Util} = require("miqro-core");
Util.loadConfig();

const logger = Util.getLogger("seconds");

let tick = true;
setInterval(() => {
  logger.info(tick ? "tick" : "tack");
  tick = !tick;
}, 1000);


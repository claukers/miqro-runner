const {Util} = require("@miqro/core");

const logger = Util.getComponentLogger("clock");

setInterval(() => {
  logger.info((logger.tick = !logger.tick) ? "tick" : "tack");
}, 1000);


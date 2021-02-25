const {getLogger} = require("@miqro/core");

const logger = getLogger("clock");

setInterval(() => {
  logger.info((logger.tick = !logger.tick) ? "tick" : "tack");
}, 1000);


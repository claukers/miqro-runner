const {
  Util,
  ParseOptionsError,
} = require("@miqro/core");
const {
  Handler,
  ResponseHandler
} = require("@miqro/handlers");

const logger = Util.getLogger("posts.js");

const myFunction = () => {
  throw new ParseOptionsError(`my request error.`);
}

module.exports = async (app) => {
  app.use("/myFunction", Handler(myFunction), ResponseHandler);
  return app;
};

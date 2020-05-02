const {
  Util,
  ParseOptionsError,
} = require("@miqro/core");
const {
  Handler,
  ResponseHandler
} = require("@miqro/handlers");



const myFunction = () => {
  throw new ParseOptionsError(`my request error.`);
}

module.exports = async (app) => {
  const somelogger = Util.getLogger("some logger");
  const mainlogger = Util.getComponentLogger();
  const componentlogger = Util.getComponentLogger("component");
  app.use("/myFunction", Handler(myFunction), ResponseHandler);
  mainlogger.info("i am here");
  somelogger.warn("me too");
  componentlogger.warn("hi!");
  return app;
};

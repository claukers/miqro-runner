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
  app.use("/myFunction", Handler(myFunction), ResponseHandler());
  app.use("/hello", Handler(async () => {
    return "world";
  }), ResponseHandler());
  somelogger.warn("me too");
  return app;
};

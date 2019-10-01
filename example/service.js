const {
  Util,
  ParseOptionsError,
} = require("miqro-core");
const {
  createServiceAPIHandler
} = require("miqro-express");

const logger = Util.getLogger("posts.js");

class MyCustomService {
  async myFunction(args) {
    throw new ParseOptionsError(`my request error.`);
  }
}

module.exports = async (app) => {
  app.use("/myFunction", createServiceAPIHandler(new MyCustomService(), "myFunction"));
  return app;
};

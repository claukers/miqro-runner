const {
  Util,
  ParseOptionsError,
} = require("miqro-core");
const {
  createServiceHandler
} = require("miqro-express");

const logger = Util.getLogger("posts.js");

class MyCustomService {
  async myFunction(args) {
    throw new ParseOptionsError(`my request error.`);
  }
}

module.exports = async (app) => {
  app.use("/myFunction", createServiceHandler(new MyCustomService(), "myFunction"));
  return app;
};

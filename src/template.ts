// noinspection SpellCheckingInspection,SpellCheckingInspection
export const mainjs = (servicejs) => {
  return `const express = require("express");
const { Util } = require("miqro-core");
const { setupMiddleware } = require("miqro-express");
process.env.MIQRO_DIRNAME = process.env.MIQRO_DIRNAME ? process.env.MIQRO_DIRNAME : __dirname;
Util.loadConfig();

const logger = Util.getLogger("main.js");
const service = require("./${servicejs}");

const app = express();
setupMiddleware(app, logger);
service(app).then((server) => {
  server.listen(process.env.PORT);
}).catch((e) => {
  logger.error(e);
});
`;
};

// noinspection SpellCheckingInspection
export const indexjs = () => {
  return `const {
  APIResponse
} = require("miqro-express");
const {
  Database
} = require("miqro-sequelize");
const {
  Util
} = require("miqro-core");
const path = require("path");

module.exports = async (app) => {
  const logger = Util.getLogger(path.basename(__filename));
  const db = await Database.getInstance();

  app.get("/hello", async (req, res) => {
    logger.info("GET /hello called!");
    await new APIResponse({
      result: "world"
    }).send(res);
  });
  logger.info("started");
  return app;
};
`;
};
// noinspection SpellCheckingInspection
export const templates = {
  indexjs,
  mainjs
};

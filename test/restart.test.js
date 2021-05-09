const { strictEqual } = require("assert");
const { it, describe } = require("mocha");
const { resolve } = require("path");
const { ClusterManager } = require("../dist");

describe("ClusterManager restart tests", function () {
  this.timeout(10000);
  it("happy path nodes: 5 disableRestart: false", (done) => {
    const pool = new ClusterManager({
      script: resolve(__dirname, "data", "exit"),
      disableRestart: false,
      nodes: 5
    });
    let broadcastDone = false;
    pool.start().then(() => {
      let count = 0;
      pool.on("message", (message) => {
        // console.log("exit receive " + require("util").inspect(message));
        strictEqual(message, "UP");
        count++;
        if (count === 5) {
          setTimeout(() => {
            strictEqual(count, 5);
            if (!broadcastDone) {
              count = 0; // reset message
              broadcastDone = true;
              pool.broadcast("exit");
            } else {
              console.log("stopping pool")
              pool.stop().then(() => {
                done();
              })
            }
          }, 1000);
        }
      });
    })
  });

  it("happy path nodes: 5 disableRestart: false do not autorestart with exit code 0", (done) => {
    const pool = new ClusterManager({
      script: resolve(__dirname, "data", "exit"),
      disableRestart: false,
      nodes: 5
    });
    let broadcastDone = false;
    pool.start().then(() => {
      let count = 0;
      pool.on("message", (message) => {
        // console.log("exit receive " + require("util").inspect(message));
        strictEqual(message, "UP");
        count++;
        if (count === 5) {
          setTimeout(() => {
            strictEqual(count, 5);
            if (!broadcastDone) {
              count = 0; // reset message
              broadcastDone = true;
              pool.broadcast("quit");
              setTimeout(() => {
                strictEqual(count, 0);
                console.log("stopping pool")
                pool.stop().then(() => {
                  done();
                })
              }, 2000);
            }
          }, 1000);
        }
      });
    })
  });
})

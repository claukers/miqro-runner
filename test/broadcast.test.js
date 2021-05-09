const { strictEqual } = require("assert");
const { it, describe } = require("mocha");
const { resolve } = require("path");
const { ClusterManager } = require("../dist");

describe("ClusterManager broadcast tests", function () {
  this.timeout(10000);
  it("happy path nodes: 5 disableRestart: true", (done) => {
    const pool = new ClusterManager({
      script: resolve(__dirname, "data", "echo"),
      disableRestart: true,
      nodes: 5
    });
    let broadcastDone = false;
    pool.start().then(() => {
      let count = 0;
      pool.on("message", (message) => {
        // console.log("receive " + require("util").inspect(message));
        if (message !== "UP")
          strictEqual(message.text, "bla");
        count++;
        if (count === 5) {
          setTimeout(() => {
            strictEqual(count, 5);
            if (!broadcastDone) {
              count = 0; // reset message
              broadcastDone = true;
              pool.broadcast({
                text: "bla"
              });
            } else {
              console.log("stopping pool")
              pool.stop().then(()=>{
                done();
              })
            }
          }, 1000);
        }
      });
    })
  });
})

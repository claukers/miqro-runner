process.on("message", (message) => {
  console.log("echo receive " + require("util").inspect(message));
  if (process.send) {
    process.send(message);
  }
});

if (process.send) {
  process.send("UP");
}

console.log("started");

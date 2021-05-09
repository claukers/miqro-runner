process.on("message", (message) => {
  console.log("exit receive " + require("util").inspect(message));
  if (process.send) {
    if (message === "quit") {
      console.log("quiting good");
      process.exit(0);
    } else if (message === "exit") {
      console.log("quiting bad");
      process.exit(9090);
    } else {
      process.send(message);
    }
  }
});

if (process.send) {
  process.send("UP");
}

console.log("started");

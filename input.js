let connection;

const handleUserInnput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  switch (key.toLowerCase()) {
    case "w":
      connection.write("Move: up");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "p":
      connection.write("Say: SUP");
      break;
  }
};

// Setup user interface
const setupInput = function (conn) {
  const stdin = process.stdin;

  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();

  stdin.on("data", (key) => handleUserInnput(key));

  return stdin;
};

module.exports = { setupInput };

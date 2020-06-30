const handleUserInnput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
};
// Setup user interface
const setupInput = function () {
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();

  stdin.on("data", (key) => handleUserInnput(key));

  return stdin;
};

module.exports = { setupInput };

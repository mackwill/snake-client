const net = require("net");
// Establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // Interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ___");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 500);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 1500);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2000);
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: left");
    // conn.write("Move: left");
    // conn.write("Move: left");
    // conn.write("Move: left");
    // conn.write("Move: left");
  });

  return conn;
};

module.exports = { connect };

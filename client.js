const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);  
  });

  const name = "DRL";
  conn.on("connect", () => {
    console.log("Successfully connected to the game server")
    conn.write(`Name: ${name}`)
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 500)
  })

  return conn;
};


module.exports = connect;
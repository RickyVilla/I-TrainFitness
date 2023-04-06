const http = require("http");
const app = require("./app");
const config = require("./config/envVars");

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipeline
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// Get port from environment and store in Express.
const port = normalizePort(config.PORT || "5000");
app.set("port", port);

// Create the HTTP server
const server = http.createServer(app);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`); 
      process.exit(1);
    case "EADDRINUSE":
      console.error(`${bind} is already in use`); 
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind} in ${config.NODE_ENV}`);
  }

/**
 * Listen on provided port, on all network interfaces.
 * replaces use of: app.listen(port, () => console.log(`Listening on port ${port}`));
 * also the intend use case of from express docs
 * @see https://expressjs.com/en/api.html#app.listen
*/
server.listen(port);

server.on("error", onError);
server.on("listening", onListening);

module.exports = server;

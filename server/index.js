const http = require("http");
const app = require("./app");
const config = require("./config/envVars");
const onError = require("./utils/onError");
const onListening  = require("./utils/onListening");
const normalizePort = require("./utils/normalizePort");

// Get port from environment and store in Express.
const port = normalizePort(config.PORT || "5000");
app.set("port", port);

// Create the HTTP server
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 * replaces use of: app.listen(port, () => console.log(`Listening on port ${port}`));
 * this is the intend use of express from official docs
 * @see https://expressjs.com/en/api.html#app.listen
*/
server.listen(port);

server.on("error", (err) => onError(err, port));
server.on("listening", () => onListening(server));

module.exports = server;

const config = require("../config/envVars");

/**
 * @function onListening is used to create log in console while server is running
 * @requires server argument
 * @param {http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>} server 
 * @returns {void}
 */
function onListening(server) {
    const addr = server?.address();
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind} in ${config.NODE_ENV}`);
}

module.exports = onListening;

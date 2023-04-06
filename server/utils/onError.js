/**
 * @function onError is used to log catch and log errors to the console.
 * @param {any | unknown} error passed from callback
 * @param {number | string} port 
 * @action on error exits running process with code 1
 * @returns {void}
 */
function onError(error, port) {
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
 module.exports = onError;

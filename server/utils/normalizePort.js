/**
 * @function normalizePort 
 * is used to normalize a port into a whole number, string, or false. need for different cloud environments
 * @param {number | string} val 
 * @returns {number | string | boolean}
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
module.exports = normalizePort;

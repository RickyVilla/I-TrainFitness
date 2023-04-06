const express = require('express');
const path = require('path');
const cors = require('cors');
const config = require('./config/envVars');

const app = express();

/**
 * Middleware
 * bodyParser package is used to parse the body of the request
 * Express has this built in now, no extra packages needed
 * @see https://expressjs.com/en/api.html#express.json
 * @see https://expressjs.com/en/api.html#express.urlencoded
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

/**
 * below block of code is used to setup delivery static files of client build
 * this would be used in production runtime only
 * which prevents the need for CORS since the whole app could be hosted in a single cloud service the origin
 * also makes it a true full-stack application in production. 
 * @see https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
 */
if (config.NODE_ENV === 'production') { 
    app.use(express.static('Client/build'));
    app.get('*', (_req, res) => {
        res.sendFile(path.resolve(__dirname, 'Client', 'build', 'index.html'));
    })
}

module.exports = app;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
module.exports = {
    PORT: process.env.PORT || 5000,
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/test?retryWrites=true&w=majority',
    NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
}

/**
 *  We don't want to require dotenv config every time we need to access it. 
 *  By declaring our own allows us to use the same config for development and production.
 *  Also sets fallback values if .env variables are not undefined.
 */
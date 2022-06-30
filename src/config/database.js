const mongoose = require('mongoose');

const connectWithDb =  (uri) => {
    try {
        mongoose.connect(uri);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log('Error connecting to database: ' + error.message);
    }
}

module.exports = connectWithDb;
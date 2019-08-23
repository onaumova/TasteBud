const mongoose = require("mongoose");

// MongoDB connection url
const mongoURL = "mongodb://localhost/tastes";

// Connect to MongoDB
const tasteDB = mongoose.connect( mongoURL,{ useNewUrlParser: true, userFindAndModify: false }, (err, db) => {
    if(err) console.log( 'mongodb Error: ' + err );
    else console.log('connection successful')
});
//const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })

module.exports = tasteDB;
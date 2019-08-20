const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const port = 3000;
const tasteRoutes = express.Router();

app.use('/tastes', tasteRoutes);

// MongoDB connection url
const mongoURL = 'mongodb://localhost/tastes';

app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect( mongoURL, (err, db) => {
//     if(err) console.log( 'mongodb Error: ' + err );
// });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })

//const routes = require('./routes');
//app.use('/', routes);

// serve index.html on the route '/'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});

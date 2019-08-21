const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const port = 3000;
const tasteRoutes = express.Router();
const fetch = require("node-fetch");

app.use("/tastes", tasteRoutes);

// MongoDB connection url
const mongoURL = "mongodb://localhost/tastes";

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
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.get("/search", (req, res) => {
    //dsgfdfgdfg
    //use the shit from the query string (deconstruct the query)
    console.log(req.query)
    fetch(
    "https://tastedive.com/api/similar?k=342876-Similari-GXWSB002&type=movie&limit=15&q=Guardians%20Of%20The%20Galaxy"
  )
    .then(res => res.json())
    .then(recs => {
      console.log("recs", recs);
      console.log(recs.Similar.Results[0]);
    })
    .catch(err => console.log("Unable to fetch the recommedations", err));
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

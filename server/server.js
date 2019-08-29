const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;
const tasteRoutes = express.Router();
const fetch = require("node-fetch");

//app.use("/tastes", tasteRoutes);

app.use(bodyParser.json());

const routes = require('./routes');
app.use('/db', routes); 

// serve index.html on the route '/'
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.use('/build', express.static(path.resolve(__dirname, '../build')))

app.get("/search", (req, res) => {
  //use the shit from the query string (deconstruct the query)
  let { category, input } = req.query;
  let inputURI = encodeURIComponent(input);
  //console.log("cat2", inputURI);
  fetch(
    `https://tastedive.com/api/similar?k=342876-Similari-GXWSB002&type=${category}&limit=15&q=${inputURI}`
  )
    .then(res => res.json())
    .then(recs => {
      res.locals.recs = recs.Similar.Results;
      //console.log("recs", recs);
      console.log("server", recs.Similar.Results[0]);
      res.status(200).send({
        recs:[ ...res.locals.recs]}
         )
    })
    .catch(err => console.log("Unable to fetch the recommedations", err));
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

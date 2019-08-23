const express = require("express");
const router = express.Router();
const tasteDB = require ('../database/tasteDb')
const Taste = require("./tasteModel");

router.get("/", (req, res) => {
  Taste.find({}, function(err, tastes) {
    if (err) {
      console.log(err);
    } else {
      console.log(tastes)
      res.status(200).send({tastes}
         )
    }
  });
});

router.post('/add', (req, res) => {
  console.log('request bodayyy',req.body)
  Taste.create(req.body, function(err, tastes) {
    if (err) {
      console.log(err);
    } else {
      res.json(tastes);
    }
  });
});

router.get("/:id", (req, res) => {
  id = req.params.id;
  Taste.findById(id,(err, taste) => {
    if (err) console.log(err);
    else {
        res.json(taste);
    }
  });
});

module.exports = router;

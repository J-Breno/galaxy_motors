"use strict";

var express = require("express");
var router = express.Router();
var data = [];

router.get("/", function (req, res) {
  console.log("[GET] /car:", data);
  res.json(data);
});

router.post("/", function (req, res) {
  var image = req.body.image;
  var brandModel = req.body.brandModel;
  var year = req.body.year;
  var plate = req.body.plate;
  var color = req.body.color;

  data.push({
    image: image,
    brandModel: brandModel,
    year: year,
    plate: plate,
    color: color,
  });
  console.log(
    "[POST] /car:",
    JSON.stringify(
      {
        body: req.body,
        data,
      },
      null,
      2
    )
  );
  res.json(data);
});

module.exports = router;

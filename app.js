//jshint esversion:6//
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  let today = new Date();
  if (today.getDay() === 0 || today.getDay() === 6) {
    res.send("It's the weekend");
  } else {
    res.send("It's working day");
  }
});
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

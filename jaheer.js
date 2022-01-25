const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world");
});

app.get("/jaheer", function (req, res) {
  const name = req.query.id;
  res.send("HI the name entered is " + name);
});

app.get("/jaheer/:id", function (req, res) {
  const id = req.params.id;
  if (id > 20) {
    res.send("ID is greater than 20");
  } else res.send("ID value is less that 20");
});

app.listen(8081, function (req, res) {
  console.log("Running");
});

var fs = require("fs");

var str = "jaheer";

var fileData;
fs.readFile("functions.js", "utf8", function (err, data) {
  if (err) return;
  console.log("This is from local variable " + data);
  fileData = data;
});
//console.log("This is a global variable " + fileData);

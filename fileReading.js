var fs = require("fs");

fs.readFile("functions.js", "utf8", function (err, data) {
  console.log(data);
});

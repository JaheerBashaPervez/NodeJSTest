var fs = require("fs");

fs.writeFile("jaheer.js", "console.log('This is Jaheer')", function (err) {
  console.log("Data saved");
});

const datavariable = require("fs");
const stream = datavariable.createReadStream(
  "./readablefiles/content.txt",
  "utf-8"
);

stream.on("data", function (result) {
  console.log(result);
});

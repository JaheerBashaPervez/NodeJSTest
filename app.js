var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead("200", { "Content-Type": "text/html" });
    res.write("In the Name of Allah the most beneficient and merciful");
    res.end();
  })
  .listen(8080);

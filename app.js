var http = require("http");
http
  .createServer(function (req, res) {
    if (req.url == "/home") {
      res.writeHead("200", { "Content-Type": "text/html" });
      res.write("In the Name of Allah the most beneficient and merciful");
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 10000; j++) {
          console.log(`${i} ${j}`);
        }
      }
      res.end();
    }
    if (req.url == "/about") {
      res.writeHead("200", { "Content-Type": "text/html" });
      res.write("This is our short story");
      res.end();
    }
  })
  .listen(8080);

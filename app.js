const http = require("http");
const PORT = 7000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome To Our Website</h1>");
    res.end();
  } else if (req.url.startsWith("/contact")) {
    const id = req.url.split("?")[1]?.split("=")[1];
    if (!id) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Contact Me</h1>");
      res.end();
    } else {
      console.log(id);
      switch (id) {
        case "1":
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.write("<h1>Contact Me With" + id + "</h1>");
          res.end();
          break;
        case "2":
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.write("<h1>Contact Me With" + id + "</h1>");
          res.end();
          break;
      }
    }
  }
});

server.listen(PORT, function () {
  console.log(`app running on port ${PORT}`);
});

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    // http://127.0.0.1:3000/
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
  } else if (req.url === "/aboutme") {
    // http://127.0.0.1:3000/aboutme
    res.write('<h1 style="color: blue">About Me</h1>');
    res.write(
      "<ul><li>I enjoy learning</li><li>I've been a bartender for 4 years.</li><li>I'm commited to becoming a SWE.</li></ul>"
    );
  } else {
    //http://127.0.0.1:3000/name of non-existant endpoint
    res.statusCode = 404;
    res.write('<h1 style = "color: red">Error code 404, page not found</h1>');
    res.write(`<p>Page doesn\'t exist at ${req.url}</p>`);
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

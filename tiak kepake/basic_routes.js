const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("</html>");
    res.write("<head><title>ok</title></head>");
    res.write("<h1>oh</h1>");
    res.write("<ul><li>User 1</li></ul>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("</html>");
    res.write("<head><title>ok</title></head>");
    res.write("<h1>Input name</h1>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button>send</button></input></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody.split("=")[1]);
      const name = parseBody.split("=")[1];
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end(), data;
  }
};

module.exports = requestHandler;

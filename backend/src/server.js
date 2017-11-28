const http = require('http');
const handlers = require("./handlers")
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;
const server = http.createServer(handlers);
server.listen(port);
console.log("Server running..");

module.exports = {
  server,
  handlers
}

require("dotenv").config();

const http = require("http");
const app = require("./app");

// Default port to 8080 if process.env.PORT is not defined
const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

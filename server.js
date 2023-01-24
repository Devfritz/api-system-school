require("dotenv").config({ path: "./.env" });
const http = require("http");
const app = require("./app/app");

const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, console.log(`server is running on localhost`));

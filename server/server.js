const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const server = express();

server.use(bodyParser.json());
server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));

// server.use("/api/v1/tutors", require("./routes/tutors"));
// server.use("/api/v1/users", require("./routes/users"));
// server.use("/api/v1/tech", require("./routes/tech"));

module.exports = server;

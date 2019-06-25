const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// Import Routers
const clientRouter = require("../Users/users-route");
// const actionsRouter = require("./actions/actions-router");

// Configure Middleware
server.use(helmet());
server.use(express.json());

// Use Routers
server.use("/api/users", users-route);
// server.use("/api/actions", actionsRouter);

// Server Test
server.get("/", (req, res) => {
  res.send({ message: "DSV Tool" });
});

module.exports = server;

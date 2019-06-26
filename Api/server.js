const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// Import Routers
const usersRoute = require("../Users/usersRoute");
// const actionsRouter = require("./actions/actions-router");

// Configure Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// Use Routers
server.use("/api/Users", usersRoute);
// server.use("/api/actions", actionsRouter);

// Server Test
server.get("/", (req, res) => {
  res.send({ message: "DSV Tool" });
});

module.exports = server;

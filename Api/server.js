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
// server.use("/api/Users", usersRoute);
usersRoute(server);
// server.use("/api/actions", actionsRouter);

// Server Test
server.get("/", (req, res) => {
  try {
    res.send({ message: "DSV Tool" });
  } catch (error) {
    res.status(500).json(error.response);
  }
});

module.exports = server;

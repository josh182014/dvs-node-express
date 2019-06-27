const express = require("./node_modules/express");
const cors = require("./node_modules/cors");
const helmet = require("./node_modules/helmet");
const server = express();

// Import Routers
const usersRoute = require("../users/usersRoute");
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

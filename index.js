// includes server and setup for routes

require("dotenv").config();

const server = require("./Api/server");

const port = process.env.PORT || 4004; // dynamic port
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

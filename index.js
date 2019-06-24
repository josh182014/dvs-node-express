// includes server and setup for dummyroutes


const server = require("./server");
const port = 4004;

server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});

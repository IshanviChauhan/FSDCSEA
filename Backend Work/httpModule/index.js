const http = require('http');
const PORT = 2527;
const server = http.createServer((req, res) => {
    console.log("Inside Server Body");
    res.setHeader('Content-Type', 'text/html');
    res.write("<div style='background-color:coral'><h1 style='color:white'>Welcome to Node Server</h1></div>\n");
    res.end("<h2>Server has ended</h2>");
})

server.listen(PORT, () => {
    console.log("Server is running on port : " + PORT);
})
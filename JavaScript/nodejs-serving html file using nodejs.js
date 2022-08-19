const http = require("http");
const fs = require("fs");

const fileText = fs.readFileSync("E:\\NITESH\\Study\\Web Development\\projects\\navbar.html");

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(fileText);
})

server.listen(800, '127.0.0.1', ()=>{
    console.log("Listening on port 800");
})
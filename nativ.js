var http = require("http");

var server= http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Hello world")
})

server.listen(9000);
console.log("server is running");
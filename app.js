var express = require('express');
var app = express();
var port = 9001;

app.get("/",function(req,res){
    res.send("Hello world")
});

app.get("/books",function(req,res){
    res.send("this is book page of node")
})


app.listen(port,function(err){
    console.log("server is running on 9001");
})
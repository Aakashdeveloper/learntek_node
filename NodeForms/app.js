var express = require('express');
var app = express();
var mongodb = require('mongodb').MongoClient;
var bodyparser = require('body-parser');
var port = process.env.PORT || 1234;


app.use(express.static(__dirname+'/public'));
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.get('/',function(req,res){
    res.render("index");

});

app.post('/contact',function(req,res){
    console.log(req.body);
    var url = 'mongodb://localhost:27017/adity_satish';
    mongodb.connect(url,function(err,db){
        var collection = db.collection('feedback');
        var user ={
            name: req.body.name,
            email: req.body.email,
            phone:req.body.phone
        };

        collection.insert(user,function(err,results){
            res.redirect('/display')
        })
    })
});

app.get('/display',function(req,res){
    var url='mongodb://localhost:27017/adity_satish';
    mongodb.connect(url,function(err,db){
        var collection =db.collection('feedback');
        collection.find({}).toArray(
            function(err,results){
                res.render('display',{feedback:results})
            })
    })
})

app.listen(port, function(err){
    console.log('running on port'+ port)
})
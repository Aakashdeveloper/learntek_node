var express = require('express');
var bookRouter = express.Router();
var mongodb  = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router =function(nav){
bookRouter.use(function(req,res,next){
    if(!req.user){
        res.redirect('/');
    }
    next();
})

bookRouter.route('/')
    .get(function(req,res){
        var url="mongodb://localhost:27017/learntekNode";

        mongodb.connect(url, function(err,db){
            var collection = db.collection('books');

            collection.find({}).toArray(
                function(err,results){
                    res.render('books',
                    {nav:nav,
                    title:"Books Page",
                    book:results});
                }
            )
        })
        
    })

bookRouter.route('/:id')
    .get(function(req,res){
        var id = new objectId(req.params.id);
        var url="mongodb://localhost:27017/learntekNode";
        mongodb.connect(url, function(err,db){
            var collection = db.collection('books');
            collection.findOne({_id: id},
            function(err,results){
                res.render('booksdetails',
                {nav:nav,
                title:"Books Detail Page",
                book:results}); 
            })
        })
      
       
    });
    return bookRouter
}
module.exports =router;

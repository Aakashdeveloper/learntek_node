var mongodb = require('mongodb').MongoClient;
var objectId= require('mongodb').ObjectID;

var bookController =function(bookService,nav){
    var middleware= function(req,res,next){
        if(!req.user){
            res.redirect('/');

        }
        next();
    }

    var getIndex =function(req,res){
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
        
    };

    var getById =function(req,res){
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
    }

    return{
        getIndex:getIndex,
        getById:getById,
        middleware:middleware
    };
}

module.exports = bookController;
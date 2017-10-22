var express = require('express');
var bookRouter = express.Router();
var mongodb  = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;


var router =function(nav){
var bookController = require('../controllers/bookController')(null,nav);

bookRouter.use(bookController.middleware);

bookRouter.route('/')
    .get(bookController.getIndex)

bookRouter.route('/:id')
    .get(bookController.getById);
    return bookRouter
}
module.exports =router;

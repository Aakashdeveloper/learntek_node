var express = require('express'),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost:27017/angular2');

var Product = require('./models/productModel');
var Order = require('./models/orderModel');

var app =express();
var port = 3600;
var myRouter = express.Router();

myRouter.route('/getProducts')
    .get(function(req,res){
        var query = {};
        if(req.query.productId){
            query.productId = req.query.productId
        }
        Product.find(query,function(err,data){
            if(err)
                res.status(500).send(err);
            else
                res.setHeader('Access-Control-Allow-Origin','*')
    		    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
                res.json(data)
        })
    })

myRouter.route('/getOrders')
    .get(function(req,res){
        Order.find(function(err,data){
            if(err)
                res.status(500).send(err);
            else
                res.setHeader('Access-Control-Allow-Origin','*')
    		    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
                res.json(data)
        })
    })

app.use('/api',myRouter);

app.listen(port,function(){
    console.log("running on port number"+3600)
});
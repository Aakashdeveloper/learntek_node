var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var orderModel = new Schema({
    productId :{type:Number},
    productName:{type:String},
    productCode:{type:String},
    releaseDate:{type:String},
    description:{type:String},
    price:{type:Number},
    starRating:{type:Number},
    imageUrl:{type:String}
});

module.exports = mongoose.model('Order',orderModel,'orders');
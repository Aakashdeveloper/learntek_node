var express = require('express');
var app = express();
var sql = require('mssql');

var config={
    user:'aditya',
    password:'satish',
    server:'abc.net.data',
    database:'feedback',
    options:{
        encrypt:true
    }
};

sql.connect(config,function(err){

});

app.get('/display',function(req,res){
  var request = new sql.Request();
  request.query('select * from user',function(err,recordset){
      console.log(recordset)
  })
})


myRouter.route('/getProducts')
    .get(function(req,res){
        var id = req.params.id;
        var ps = new sql.PreparedStatement();
        ps.input('id',sql.Init);
        ps.input('name',sql.Init);
        ps.prepare('select * from user where id = @id and name =@name',function(err){
            ps.execute({
                id:req.params.id
            },function(err,recordset){
                 res.setHeader('Access-Control-Allow-Origin','*')
    		    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')
                res.json(recordset)
            })
           
        })
        
    })

var port = 5006;

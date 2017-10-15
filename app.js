var express = require('express');
var app = express();
var port = 9001;



app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');

var navbar=[
    {name:'HOME',link:'/'},
    {name:'Books',link:'/books'},
    {name:'Authors',link:'/authors'},
    {name:'About',link:'/about'},
]

var bookRouter = require('./src/routes/bookRoutes')(navbar);
var AdminRouter = require('./src/routes/adminRoutes')(navbar);

app.get("/",function(req,res){
    //res.send("Hello world")
    res.render('index',{nav:navbar,title:"Home Page",});
});


app.use('/books',bookRouter);
app.use('/Admin',AdminRouter);

app.get("/authors",function(req,res){
    res.send("Page coming soon")
});


app.listen(port,function(err){
    console.log("server is running on 9001");
})
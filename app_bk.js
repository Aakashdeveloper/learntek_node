var express = require('express');
var app = express();
var port = 9001;
var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'Les Misérables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            read: false
        },
        {
            title: 'The Time Machine',
            genre: 'Science Fiction',
            author: 'H. G. Wells',
            read: false
        },
        {
            title: 'A Journey into the Center of the Earth',
            genre: 'Science Fiction',
            author: 'Jules Verne',
            read: false
        },
        {
            title: 'The Dark World',
            genre: 'Fantasy',
            author: 'Henry Kuttner',
            read: false
        },
        {
            title: 'The Wind in the Willows',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        },
        {
            title: 'Life On The Mississippi',
            genre: 'History',
            author: 'Mark Twain',
            read: false
        },
        {
            title: 'Childhood',
            genre: 'Biography',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        }
    ];

app.use(express.static('public'));
app.set('views','./src/views');
app.set('view engine','ejs');

var navbar=[
    {name:'HOME',link:'/'},
    {name:'Books',link:'/books'},
    {name:'Authors',link:'/authors'},
    {name:'About',link:'/about'},
]

app.get("/",function(req,res){
    //res.send("Hello world")
    res.render('index',{nav:navbar,title:"Home Page",});
});

app.get("/books",function(req,res){
    //res.send("this is book page of node")
    res.render('books',{nav:navbar,title:"Books Page",book:books});
})

app.get("/single",function(req,res){
    //res.send("this is book page of node")
    res.render('books',{nav:navbar,title:"Books Page",book:books});
})
app.get("/authors",function(req,res){
    res.send("Page coming soon")
});


app.listen(port,function(err){
    console.log("server is running on 9001");
})
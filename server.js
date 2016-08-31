// server.js

    // set up ========================


/*var fs = require("fs"), 
    express = require("express"),    
    ejs = require('ejs');
    
var host = "127.0.0.1";
var port = 1337;

var app = express();
app.use(express.static(__dirname + "./")); //use static files in ROOT/public folder
app.set('view engine', 'ejs');

app.get("/", function(request, response){ //root dir    
        //response.send("Hello!!");
    response.render('index.html');
});

app.listen(port, host);*/

var express = require('express');

var path = require('path');

var app = express();

var clientDir = path.join(__dirname, '/public');

app.use(express.static(clientDir));
app.get('/', function(req, res) {
    res.sendfile(path.join(clientDir, 'index.html'));
});

app.listen(3000);
console.log('Listeningport 3000...');
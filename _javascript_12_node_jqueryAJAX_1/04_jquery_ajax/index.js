#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //
// tell express that the view engine is hbs
app.set('view engine', 'hbs');


// -------------- express 'get' handlers -------------- //

app.get('/', function(req,res) {
    res.render('index')
});

app.get('/background_worker', function(req,res) {
    
    var someString = '----HI------'
    res.send(someString)
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 
var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});
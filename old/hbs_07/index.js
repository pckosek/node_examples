#!/usr/bin/nodejs

// INITIALIZATION STUFF
var express = require('express')
var hbs = require('hbs');
var app = express();

// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
app.set('port', process.env.PORT || 8080 );

app.set('view engine', 'hbs');

// -------------- export functions -------------- //
app.get('/', function(req, res){
    res.render('index');
});


// -------------- listener -------------- //
var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
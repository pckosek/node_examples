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

app.get('/someServerPage', function(req, res){
    res.send('this is server text!!');
});

app.get('/someBetterServerPage', function(req, res){
    res.send(req.query.user_name + ' sent this is server text!!');
});



// -------------- listener -------------- //
var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- serve static folders -------------- //
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))


// -------------- variable definition -------------- //
var visitorCount = 0; 

// -------------- express 'get' handlers -------------- //
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/formatting', function(req, res){
    res.sendFile(__dirname + '/formatting.html');
});

app.get('/formatting-2', function(req, res){
    res.sendFile(__dirname + '/formatting_2.html');
});

app.get('/formatting-3', function(req, res){
    res.sendFile(__dirname + '/formatting_3.html');
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
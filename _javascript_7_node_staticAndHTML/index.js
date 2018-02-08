#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- serve static folders -------------- //
app.use('/js', express.static(path.join(__dirname, 'client_javascript')))


// -------------- variable definition -------------- //
var visitorCount = 0; 

// -------------- express 'get' handlers -------------- //
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// the public facing address need not match the local file name!
app.get('/formatting', function(req, res){
    res.sendFile(__dirname + '/formatting.html');
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
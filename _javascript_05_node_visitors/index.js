#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- variable definition -------------- //
// This counter is stored in RAM, and will be reset every time you
// restart the server.

var visitorCount = 0; 


// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    visitorCount++;
    res.send('hola visitor #' + visitorCount);

    // for our reference
    console.log(visitorCount);
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
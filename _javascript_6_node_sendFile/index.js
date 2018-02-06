#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express')
var app = express();

// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- variable definition -------------- //
// Just to be nosy
var visitorCount = 0; 


// See the value of the constant we are going to use
console.log(__dirname)

// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    visitorCount++;
    console.log(visitorCount);

    // sendFile sends the actual html
    // __dirname is a string that corresponds to the current directory location
    res.sendFile(__dirname+ '/index.html');
});



// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
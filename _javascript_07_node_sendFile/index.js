#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var path = require('path')


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

    // sendFile sends the actual html files
    // __dirname is a string that corresponds to the current directory location
    
    var full_path = path.join( __dirname, 'index.html' )
    res.sendFile(full_path);
});

app.get('/just_a_string', function(req, res){
    // res.send just sends a string
    res.send('just a string for you.')
})


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});

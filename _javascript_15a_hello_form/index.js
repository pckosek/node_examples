#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');

// create out server
var app = express();


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- express 'get' handlers -------------- //

// STEP 1 - SERVE THE ROOT PAGE WITH A FORM
app.get('/', function(req, res){
    res.sendFile(
        path.join(__dirname, 'form_one.html')
    );
})

// STEP 5 - PROCESS THE FORM ON THE SERVER
app.get('/process_form_one', function(req, res){
    
    // STEP 6 - PARSE THE KEYS
    // there is a 'shape' key BECAUSE there is an element in the
    // (serialized) form named 'shape'
    var shapename = req.query.shape;
    
    var outstr = "hello, " + shapename;

    // STEP 6 - SEND A RESPONSE
    res.send(outstr);
})


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
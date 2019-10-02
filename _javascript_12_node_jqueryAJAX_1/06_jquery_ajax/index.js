#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

// tell express that the view engine is hbs
app.set('view engine', 'hbs');


// -------------- express 'get' handlers -------------- //

app.get('/', function(req,res) {
    res.render('index')
});

app.get('/background_worker', function(req,res) {
    
    var asNumber = parseFloat(req.query.some_number);
    var squared  = Math.pow( asNumber, 2); 

    var someString = '----' + squared + '------';
    res.send(someString)
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
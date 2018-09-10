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


// -------------- helper function (middleware) -------------- //

function countVisitors (req, res, next) {

	// increment
    visitorCount++;

    // for our reference
    console.log(visitorCount);

	// call the next function in the sequence
	next();	
}


// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

//    !!! The count visitors argument here indicates that that function
// 			is called before this final abstract function !!!

app.get('/', [countVisitors], function(req, res){
	res.send('Number of visitors: ' + visitorCount);
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
})
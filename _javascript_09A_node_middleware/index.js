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


// -------------- helper functions (middleware) -------------- //
function countVisitors (req, res, next) {

	// increment
    visitorCount++;

    // for our reference
    console.log(visitorCount);

	// call the next function in the sequence
	next();
}


function getClientIP (req, res, next) {

	// get the user's IP address
	var IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

	// save the variable is the local space for this request
	res.locals.ip_addr = IP;

	next();
}
// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

//    !!! The count visitors argument here indicates that that function
// 			is called before this final abstract function !!!

app.get('/', [countVisitors, getClientIP], function(req, res) {

	var outputString = 'Number of visitors: ' + visitorCount + '\n';
	outputString    += 'Your IP: ' + res.locals.ip_addr;
	res.send(outputString);
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
})
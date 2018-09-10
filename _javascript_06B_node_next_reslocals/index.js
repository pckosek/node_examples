#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs')


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- variable definition -------------- //
// Just to be nosy
var visitorCount = 0; 
// See the value of the constant we are going to use
console.log(__dirname)


// -------------- helper function -------------- //

function countVisitors (req, res, next) {

	visitorCount++;			// increment number of visits
    console.log(visitorCount);

	next();					// call the next function in the sequence
}

// -------------- express 'get' handlers -------------- //

// These 'getters' are what fetch your pages

app.get('/', [countVisitors], function(req, res){
	res.send('Number of visitors: ' + visitorCount);
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
})
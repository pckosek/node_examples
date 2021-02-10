#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //

// tell express that the view engine is hbs
app.set('view engine', 'hbs');


// -------------- variable definition  -------------- //

var visitCount = 0;

// -------------- express endpoint definition -------------- //

app.get('/', function(req, res){

	visitCount++;

	var render_dict = { 
		user : 'Paul',
		count : visitCount
	}

    // render the page
    res.render('index', render_dict);
   
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});

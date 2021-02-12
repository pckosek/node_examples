#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //

// tell express that the view engine is hbs
app.set('view engine', 'hbs');

// serve files from the static directory (https://expressjs.com/en/starter/static-files.html)
// the following line is a directive to serve all files in all subfolders 
app.use(express.static('static'))


// -------------- express 'get' handlers -------------- //

app.get('/', function(req, res){

	console.log(req.query.q)

	var render_params = {
		'param_1' : req.query.q
	}

    // render the template
    res.render('index', render_params );

});


app.get('/bar', function(req, res){

	console.log(req.query.bar)

	var render_params = {
		'param_1' : req.query.bar
	}
	
    // render the template
    res.render('foo', render_params );

});



// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});

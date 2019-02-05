#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

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

    if (typeof(req.query.food) == 'undefined') {
        // render the page
        res.render('index', render_dict);
    } else {
        render_dict['food'] = req.query.food;
        res.render('fav_food', render_dict);
    }
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
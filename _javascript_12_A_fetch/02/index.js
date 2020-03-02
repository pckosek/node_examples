#!/usr/bin/nodejs

// -------------- load packages -------------- //

var express     = require('express')
var app         = express();
var hbs         = require('hbs');
var path        = require('path');

// -------------- express initialization -------------- //
// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM

app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs')

// -------------- express 'get' handlers -------------- //
app.use(express.static(path.join(__dirname,'static')))


app.get('/', function(req, res){
    res.render( 'index' );
});

var prices = {
	'house' : 3,
	'caesar' : 3,
	'cobb' : 5,
	'steak' : 7,
	'tofu' : 5,
	'salmon' : 9
}

app.get('/get_order',function (req,res) {

	console.log( req.query )

	var salad_choice = req.query.salad;
	var main_choice  = req.query.main;

	var total = prices[salad_choice] + prices[main_choice]

	res.json( {'cost' : total} )
})


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
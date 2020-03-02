#!/usr/bin/nodejs

// -------------- load packages -------------- //

var express     = require('express')
var app         = express();
var hbs         = require('hbs');
var path        = require('path');

var bodyParser  = require('body-parser')

// -------------- express initialization -------------- //
app.use(express.static(path.join(__dirname,'static')))
app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs')


// -------------- body-parser initialization -------------- //
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// -------------- express 'get' handlers -------------- //

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

app.post('/get_order',function (req,res) {

	console.log(req.body)
	var salad_choice = req.body.salad;
	var main_choice  = req.body.main;

	var total = prices[salad_choice] + prices[main_choice]

	res.json( {'cost' : total} )
})


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
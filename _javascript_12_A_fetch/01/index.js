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

var houses = [
	'Slytherin',
	'Gryffindor',
	'Hufflepuff',
	'Ravenclaw',
	'Squibb'	
]

app.get('/house_worker',function (req,res) {

	var choice_no = Math.floor( Math.random() * houses.length )
	res.json( {'house' : houses[choice_no] } )
})


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
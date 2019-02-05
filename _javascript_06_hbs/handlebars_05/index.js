#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

// tell express that the view engine is hbs
app.set('view engine', 'hbs');


// -------------- express endpoint definition -------------- //

app.get('/', function(req, res){

    var user = req.query.user;

    var foods = [
        'tacos',
        'spaghetti',
        'pizza',
        'kutfa'
    ]
    
    var feed_dict = {
        user : user,
        food_list : foods
    }
    
    //  iterate over each element in a list => https://handlebarsjs.com/builtin_helpers.html
    res.render('index', feed_dict);

});

// WILDCARD HANDLERS MUST COME AFTER ALL OTHER EXPLICIT ENDPOINTS 
app.get('/:page', function(req, res){

    var info = {
        page : req.params.page
    };

    res.json(info)
});

// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
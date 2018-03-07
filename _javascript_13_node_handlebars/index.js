#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');

//custom packages
var states = require('./serverJS/statesInfo.js')
var util = require('./serverJS/myUtilities.js')

// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');


// -------------- serve static folders -------------- //
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))


visitCounter = 0;

// -------------- express 'get' handlers -------------- //
//user root page i.e. https://user.tjhsst.edu/pckosek/
app.get('/', function(req, res){
    res.render('index');
});


app.get('/randomState', function(req, res){

    // increment the visitCounter
    visitCounter++;

    // generate a random int
    randi = util.getRandomInt(0,51)

    // pluck out a state with that index
    render_dictionary = { 
        stateName : states.stateList[randi],
        visits    : visitCounter
    };

    res.render('state', render_dictionary );
});



//user requested some other page beneath root, i.e. https://user.tjhsst.edu/pckosek/blah
app.get('/:page', function(req, res){
    // redirect back to the home page
    res.redirect('https://user.tjhsst.edu/pckosek/');
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
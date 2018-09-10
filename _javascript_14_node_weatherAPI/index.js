#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- serve static folders -------------- //
// THIS 'OPENS UP' FOLDERS FOR CLIENT-SIDE USE
// you cannot access your client side js until the folder is mapped to a virtual directory
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))


// -------------- express 'get' handlers -------------- //
//user root page i.e. https://user.tjhsst.edu/pckosek/
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// THIS IS THE SIMPLEST WAY TO MAKE AN API. 
// THIS IS THE CALLBACK USED BYT THE CLIENT IN THE EXAMPLE
// --- requested page: https://user.tjhsst.edu/pckosek/getweather?city=blah
app.get('/getweather', function(req, res){
    response = {};
    response['city'] = req.query.city;
    response['temp'] = 75 +  Math.floor(Math.random() * 10);
    response['pressure'] = 28.5 +  Math.random() * 2;

    res.json(response);
});


// THIS IS A MORE ROBUST ALTERNATIVE. REQUIRES JSON.parse()ing the result.
// [UNTESTED] - BUT I THINK THIS IS THE CROSS-PLATFORM SOLUTION
// --- requested page: https://user.tjhsst.edu/pckosek/get_weather_stringify?city=blah
app.get('/get_weather_stringify', function(req, res){
    response = {};
    response['city'] = req.query.city;
    response['temp'] = 75 +  Math.floor(Math.random() * 10);
    response['pressure'] = 28.5 +  Math.random() * 2;

    res.send(JSON.stringify(response));
});


// YET ANOTHER ALTERNATIVE. DOES NOT REQUIRE JSON.parse()ing the result.
// ---requested page: https://user.tjhsst.edu/pckosek/get_the_weather?city=blah
app.get('/get_the_weather', function(req, res){
    response = {};
    response['city'] = req.query.city;
    response['temp'] = 75 +  Math.floor(Math.random() * 10);
    response['pressure'] = 28.5 +  Math.random() * 2;

    res.send(response);
});


//user requested some page beneath root, i.e. https://user.tjhsst.edu/pckosek/blah
app.get('/:page', function(req, res){
    // redirect back to the home page
    res.redirect('https://user.tjhsst.edu/pckosek/');
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
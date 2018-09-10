#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var request = require('request');

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


app.get('/asyncDemo', function(req, res){

    visitCounter++;

    ion_api_request_url = 'https://ion.tjhsst.edu/api/schedule?format=json';

     // Perform the asyncrounous request ...
    request.get( {url:ion_api_request_url}, 
        // callback for when we get a response
        function (e, r, body) {
            

            // THE RESULT FROM ION API IS STRINGIFIED JSON
            var res_object = JSON.parse(body);

            console.log(res_object['results'][0]);
            console.log(res_object['results'][0]['day_type']);
            console.log(res_object['results'][0]['day_type']['blocks']);
            console.log(res_object['results'][0]['day_type']['blocks'][0]);
            console.log(res_object['results'][0]['day_type']['blocks'][0]['name']);

            //body will contain the data
            first_block =  res_object['results'][0]['day_type']['blocks'][0]['name'];

            // view rendered feed dictionary
            render_dictionary = { 
                firstBlock : first_block,
                visits     : visitCounter
            };

            res.render('async', render_dictionary );
        }
    )
});




//user requested some other page beneath root, i.e. https://user.tjhsst.edu/pckosek/blah
app.get('/:page', function(req, res){
    // redirect back to the home page
    console.log('root: ' + req.params.page);
    console.log('query: ' + JSON.stringify(req.query));
    console.log('keys: ' + Object.keys(req.query));
    res.redirect('https://user.tjhsst.edu/pckosek/');
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');
var headsTails = require('./serverJS/myMagicFunction.js')

var hbs = require('hbs')
app.set('view engine', 'hbs');


// -------------- serve static folders -------------- //
app.use(express.static(path.join(__dirname, 'static')))


// -------------- express 'get' handlers -------------- //
//user root page i.e. https://user.tjhsst.edu/pckosek/
app.get('/', function(req, res){
    res.render('index');
});

//requested page: https://user.tjhsst.edu/pckosek/getpet?name=foo&type=bar
app.get('/getpet', function(req, res){
    respString = 'You have a pet ' + req.query.type + ' named ' +req.query.name;
    res.send(respString);
});


//user requested some page beneath root, i.e. https://user.tjhsst.edu/pckosek/blah
app.get('/:page', function(req, res){
    // determine the sub-page
    var paramsRequest = req.params.page;
    // arbitrary user variable
    var flipResult;
    
    // specific logic if the user requested https://user.tjhsst.edu/pckosek/flipcoin,
    // otherwise, redirect to the root level page
    if (paramsRequest=='flipcoin') {
        flipResult = headsTails.headsOrTails()
        res.send(flipResult)
    } else {
        res.redirect('https://user.tjhsst.edu/pckosek/');
    }
});


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});
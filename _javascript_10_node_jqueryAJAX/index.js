#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');
var headsTails = require('./serverJS/myMagicFunction.js')


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- serve static folders -------------- //
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/img', express.static(path.join(__dirname, 'img')))


// -------------- express 'get' handlers -------------- //
//user root page i.e. https://user.tjhsst.edu/pckosek/
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
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

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
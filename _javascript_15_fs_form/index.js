#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
var request = require('request');
var fs = require('fs');

// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs');

// -------------- serve static folders -------------- //
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))

// -------------- variables -------------- //
visitCounter = 0;

// -------------- express 'get' handlers -------------- //
//user root page i.e. https://user.tjhsst.edu/pckosek/
app.get('/', function(req, res){
    res.render('index');
});


app.get('/a_word', function(req, res){
    visitCounter++;
    chars = fs.readFileSync(__dirname + '//resources//enable1.txt').toString();
    lines = chars.split('\n');
    res.send( lines[visitCounter] );
});


app.get('/submit_userpass', function(req, res){
    console.log(Object.keys(req.query))
    console.log(req.query)
    
    out = {};
    out['user'] = req.query.username;
    out['pass'] = req.query.password;
    res.send(out);
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
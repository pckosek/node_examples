#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');
var mysql = require('mysql');

// password vars, etc.
var private_vars = require( path.join(__dirname, '..', 'private', 'private_vars.js') );
 
// create out server
var app = express();


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- mysql initialization -------------- //
// create a connection pool
var pool  = mysql.createPool(private_vars.sql_params);



// -------------- express 'get' handlers -------------- //

//sent a default file
app.get('/', function(req, res){
    res.sendFile(
        path.join(__dirname, 'restaurant.html')
    );
})

// this is called by AJAX
app.get('/kitchen', function(req, res){
    
    // there exists req.query.menu_item because there is an input named
    //    'menu_item' in the form
    var menu_item = req.query.menu_item;

    // SQL DATABASE TIME!!!
    pool.query('SELECT s_name FROM students WHERE id=?',menu_item, function (error, results, fields) {
      if (error) throw error;

        // CONSTRUCT AND SEND A RESPONSE
        outstr = 'Here is your ' + results[0].s_name + '. Have a nice day!';
        res.send(outstr);   
    });
})


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
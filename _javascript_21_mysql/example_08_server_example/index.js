#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var hbs = require('hbs');

 
// create out server
var app = express();


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );
app.set('view engine', 'hbs')

// -------------- mysql initialization -------------- //
// GET THER PARAMETERS FROM DIRECTOR!!!
var sql_params = {
  connectionLimit : 10,
  user            : 'your_username',                // change
  password        : 'asdfasdfasdfasdfasdfasdf',     // change
  host            : 'dbserver.school.com',          // change
  port            : 3306,
  database        : 'your_databasename'             // change 
}

var pool  = mysql.createPool(sql_params);



// -------------- express 'get' handlers -------------- //

//sent a default file
app.get('/', function(req, res){
    res.render('restaurant');
})

// this is called by AJAX
app.get('/kitchen', function(req, res){
    
    // there exists req.query.menu_item because there is an input named
    //    'menu_item' in the form
    var menu_item = req.query.menu_item;

    // SQL DATABASE TIME!!!
    pool.query('SELECT f_name FROM foods WHERE id=?',menu_item, function (error, results, fields) {
      if (error) throw error;

        // CONSTRUCT AND SEND A RESPONSE
        outstr = 'Here is your ' + results[0].f_name + '. Have a nice day!';
        res.send(outstr);   
    });
})


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
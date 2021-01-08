#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var hbs = require('hbs');

 
// create out server
var app = express();


// -------------- express initialization -------------- //
app.set('view engine', 'hbs')

// -------------- mysql initialization -------------- //
// GET THER PARAMETERS FROM DIRECTOR!!!
var sql_params = {
  connectionLimit : 10,
  user            : process.env.DIRECTOR_DATABASE_USERNAME,
  password        : process.env.DIRECTOR_DATABASE_PASSWORD,
  host            : process.env.DIRECTOR_DATABASE_HOST,
  port            : process.env.DIRECTOR_DATABASE_PORT,
  database        : process.env.DIRECTOR_DATABASE_NAME
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
        //  - the response from the database will be in the results parameter.
        //    in this case, I've examined the results ahead of time and know that results is an array
        //    the 0th element of the array has the data we're looking for
        //  - and it will be an object with the fields we selected.

        // put the relevant response into a dictionary for hbs
        var render_dictionary = {
          'order' : results[0].f_name
        }

        //render
        res.render('result', render_dictionary );   
    });
})


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});

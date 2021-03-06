#!/usr/bin/nodejs


// -------------- load packages -------------- //
var express = require('express')
var app = express();

var hbs = require('hbs');


// -------------- express initialization -------------- //

// tell express that the view engine is hbs
app.set('view engine', 'hbs');


// -------------- variable definition -------------- //
var visitorCount = 0; 


// -------------- express 'get' handlers -------------- //

app.get('/', function(req, res){

    // increment the number of visitors
    visitorCount++;     
    
    // render the page
    res.render('index', { numVisitors : visitorCount} );
   

    // ---- ALTERNATIVELY ----

    // render the page
    // res.render('index', 
    // 	{ numVisitors : visitorCount}
    // );


    // ---- ALTERNATIVELY ----

    // // dictionary of values
    // var feed_dict = { numVisitors : visitorCount};

    // // render the page
    // res.render('index', feed_dict );

});

// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});

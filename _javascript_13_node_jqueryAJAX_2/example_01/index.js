#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');

var app = express();                /* create our server */

var hbs = require('hbs')
app.set('view engine', 'hbs');

// -------------- serve static folders -------------- //
app.use(express.static(path.join(__dirname, 'static')))


// -------------- define variables -------------- //
var menu = [
    'salad',
    'pasta',
    'pizza',
    'chicken'
]


// -------------- define endpoints -------------- //
app.get('/', function(req, res){
    res.render('ajax_without_jquery')
})


// this is called by AJAX
app.get('/kitchen', function(req, res){
    
    // there exists req.query.menu_item because there is an input named
    //    'menu_item' in the form
    var menu_item = req.query.menu_item;

    var order = {
        food : menu[menu_item]
    }

    res.json(order);   
})


// -------------- listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});
#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');

var app = express();                /* create our server */


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- serve static folders -------------- //
app.use('/css', express.static(path.join(__dirname, 'css')))


// -------------- define variables -------------- //
var menu = [
    'salad',
    'pasta',
    'pizza',
    'chicken'
]


// -------------- define endpoints -------------- //
app.get('/', function(req, res){
    res.sendFile(
        path.join(__dirname, 'ajax_without_jquery.html')
    );
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

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
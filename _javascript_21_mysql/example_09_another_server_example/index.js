#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');

var app = express();                /* create our server */

var hbs = require('hbs')
app.set('view engine', 'hbs');

var mysql = require('mysql');

// -------------- serve static folders -------------- //
app.use(express.static(path.join(__dirname, 'static')))


// -------------- mysql initialization -------------- //
// USE PARAMETERS FROM DIRECTOR DOCS!!!
var sql_params = {
  connectionLimit : 10,
  user            : process.env.DIRECTOR_DATABASE_USERNAME,
  password        : process.env.DIRECTOR_DATABASE_PASSWORD,
  host            : process.env.DIRECTOR_DATABASE_HOST,
  port            : process.env.DIRECTOR_DATABASE_PORT,
  database        : process.env.DIRECTOR_DATABASE_NAME
}

var pool  = mysql.createPool(sql_params);

// -------------- define endpoints -------------- //
app.get('/', function(req, res){
    
    var sql = 'CALL menu_proc()';
    pool.query(sql, function(error, results, fields){
        if (error) throw error;
        
        // results is of the form:
        // [
        //     [{}, {}],
        //     [{}, {}, {}],
        //     [{}],
        // ]
        var submenus = [];
        for (i = 0; i < results.length-1; i++) { // choose l-1 because of okpacket at end
            var elem = results[i];
            var this_menu = {};
            this_menu.label = elem[0].menu;
            this_menu.items = elem.map(function(e){
                return {
                    'name' : e['f_name'],
                    'price': e['price']
                };
            })
            submenus.push(this_menu);
            console.log(this_menu)
        }
        var render_dictionary = {
            'submenus' : submenus
        }
        
        console.log(render_dictionary)
        res.render('menu', render_dictionary)
    })
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
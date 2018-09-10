#!/usr/bin/nodejs

// INITIALIZATION STUFF
var express = require('express')
var app = express();
var mysql = require('mysql');
 

// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
app.set('port', process.env.PORT || 8080 );


var connection = mysql.createConnection({
  database : 'db',
  host     : 'host.ourschool.edu',
  port     : 1234,
  user     : 'uname',
  password : 'password'
});

connection.connect();

connection.query('SELECT * FROM students', function (error, results, fields) {
  if (error) throw error;
  console.log('Results has this many entries:', results.length);
  console.log('------------------------------');
  console.log('The first entry is:', results[0]);
  console.log('------------------------------');
  console.log('The keys of the first entry are:', Object.keys(results[0]));
  console.log('------------------------------');
  console.log('The entire query is: ', results);
  console.log('------------------------------');
});

connection.end();

// -------------- export functions -------------- //
app.get('/', function(req, res){
    res.send('hola');
});



// // -------------- listener -------------- //
// var listener = app.listen(app.get('port'), function() {
//   console.log( 'Express server started on port: '+listener.address().port );
// });
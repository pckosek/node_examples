#!/usr/bin/nodejs

// -- NOTE - THIS IS A STAND-ALONE DEMO SCRIPT !!!!!!!!!!!!!!!!!!!!  //
//  IF YOU RUN THIS AS A SERVER, ...IT... ...WILL... ...FAIL..       //

//  to use this demo call:
//  $node test.js

//  when you are happy with the way it works, WEAVE it back into your server 
//  copy-pasting into a server does not make sense and guarantees brokenness


// load package
var mysql = require('mysql');
 

// create a connection pool
//  - this allows for multiple connections to occur without incurring 'startup costs' 
//    (these costs are time costs for setting up a db connection)
//    it allows a connection to your db to be reused among subsequent users.
var pool  = mysql.createPool({
  connectionLimit : 10,
  user            : 'your_username',
  password        : 'asdfasdfasdfasdfasdfasdf',
  host            : 'dbserver.school.com',
  port            : 1234,
  database        : 'your_databasename'
});


// create a new student json object
var new_student = {
    id : 5,
    s_name : 'James',
    home : 'VA'
}

// insert a new student. 
//   - here the SET command specifies that the variable to follow has the required parameters
pool.query('INSERT INTO students SET ?', new_student, function (error, results, fields) {
  if (error) throw error;
  
  // the pool keeps node's event loop alive;
  //  - while this is great news for a server, in this standalone context 
  //    it that means that node will hang until you ctrl-c your node process
  //    to prevent this hanging behavior, the following is implemented

  // THE FOLLOWING IS A TOTAL HACK TO CLOSE THE POOL THAT WOULD .NEVER. 
  //   APPEAR HERE IN AN ACTUAL SERVER

  pool.end(); //terminate the pool when the first asyncrhonous pool.query finishes
});


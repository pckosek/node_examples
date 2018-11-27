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

// data for the pool query
var x = 'VA';

// perform a query and get the result in javascript
pool.query('CALL get_by_state(?)', [x], poolCallbackFunction);


/* --------------------------------- */
/*    HELPER FUNCTION                */

function poolCallbackFunction (error, results, fields) {
  if (error) throw error;

  console.log('The solution is: ', results[0]); 
  terminatePool();
}

function terminatePool() {
  // THE FOLLOWING IS A TOTAL HACK TO CLOSE THE POOL 
  pool.end(); //terminate the pool when the first asyncrhonous pool.query finishes
}
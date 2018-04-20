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

// perform a query and get the result in javascript
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;

  // a) the results are returned as an array
  // b) if you specify an alias via 'AS', then the result gets in a key by that name
  console.log('The solution is: ', results[0].solution);
    
  // the pool keeps node's event loop alive;
  //  - while this is great news for a server, in this standalone context 
  //    it that means that node will hang until you ctrl-c your node process
  //    to prevent this hanging behavior, the following is implemented

  // THE FOLLOWING IS A TOTAL HACK TO CLOSE THE POOL THAT WOULD .NEVER. 
  //   APPEAR HERE IN AN ACTUAL SERVER

  pool.end(); //terminate the pool when the first asyncrhonous pool.query finishes
});


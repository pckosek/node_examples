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
//  - there will be more than one result, so we iterate over the results
pool.query('SELECT id, s_name FROM students WHERE id>2', function (error, results, fields) {
  if (error) throw error;
  
  console.log('---------');
  console.log('Raw sql results:', results);
  console.log('---------');
  console.log('number of sql results: ', results.length);
  console.log('---------');

  for(var i=0; i<results.length; i++) {
    // tease some data out 
    console.log('This guy\s name is: ' + results[i].s_name);
  }

  // the pool keeps node's event loop alive;
  //  - while this is great news for a server, in this standalone context 
  //    it that means that node will hang until you ctrl-c your node process
  //    to prevent this hanging behavior, the following is implemented

  // THE FOLLOWING IS A TOTAL HACK TO CLOSE THE POOL THAT WOULD .NEVER. 
  //   APPEAR HERE IN AN ACTUAL SERVER

  pool.end(); //terminate the pool when the first asyncrhonous pool.query finishes
});


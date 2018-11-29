var express = require('express')
var app = express();
var CronJob = require('cron').CronJob;
var mysql = require('mysql');


// -------------- express initialization -------------- //

app.set('port', process.env.PORT || 8080 );


// -------------- MySQL initialization -------------- //

sqlParams = {
  connectionLimit : 10,
  user            : 'your_username',
  password        : 'asdfasdfasdfasdfasdfasdf',
  host            : 'dbserver.school.com',
  port            : 1234,
  database        : 'your_databasename'
}
var pool  = mysql.createPool(sqlParams);


// -------------- CronJob initialization -------------- //

var cronCounter = 0;
var job = new CronJob('*/5 * * * * *', function() {
    // increment the counter
    cronCounter += 1;

    // create an insertion object using a key/value pain
    updateObject = { points : cronCounter };

    // perform the pool update
    pool.query('UPDATE students SET ? WHERE id=1', updateObject, function (error, results, fields) {
      if (error) throw error;
    });
}, null, true, 'America/New_York');


// -------------- express endpoints -------------- //
// These endpoints callback functions are what fetch your pages

app.get('/', function(req, res){
    res.json({ cronCount: cronCounter });
});


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
var express = require('express')
var app = express();

var CronJob = require('cron').CronJob;

// -------------- express initialization -------------- //

app.set('port', process.env.PORT || 8080 );


// -------------- CronJob initialization -------------- //
var cronCounter = 0;
var job = new CronJob('*/5 * * * * *', function() {
    cronCounter += 1;
	console.log('Another 5 seconds, '+cronCounter);
}, null, true, 'America/New_York');


// -------------- express 'get' handlers -------------- //
// These 'getters' are what fetch your pages

app.get('/', function(req, res){
    res.json({ cronCount: cronCounter });
});


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
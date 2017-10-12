#!/usr/bin/nodejs


// -------------- initialization stuff -------------- //

var cookieSession = require('cookie-session')
var express = require('express')
var app = express();

// -- set the port for our system -- //
app.set('port', process.env.PORT || 8080 );


// -------------- cookie configuration -------------- //
 
app.set('trust proxy', 1) 
app.use(cookieSession({
  name: 'session',
  keys: ['secret2', 'secret1']
}))
 
// -------------- express getter -------------- //

app.get('/', function (req, res, next) {
  //    (req.session.views || 0) => create 'req.session.views' if necessary
  //    ..) + 1 => add one to it each time someone arrives
  req.session.views = (req.session.views || 0) + 1
  req.session.viewers = (req.session.viewers || 0) + 2
 
  // Write response 
  res.send(req.session.views + ' views<br>'  + req.session.viewers + ' viewers<br>');
})

app.get('/reset', function (req, res, next) {
  console.log(req);
  console.log(req.session);
  
  res.send('reset');
})

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});

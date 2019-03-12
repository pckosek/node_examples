#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express')
var app = express();

var cookieSession = require('cookie-session')


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );


// -------------- cookie configuration -------------- //
 
app.use(cookieSession({
  name: 'snorkles',                         // ==> the name of the cookie is snorkles      
  keys: ['enc_key_01_blah', 'enkey2_foo']   // ==> these two keys encrypt the cookie. CHANGE THEM! 
}))
 
// -------------- express endpoints -------------- //

app.get('/', function (req, res) {

  // req.session is the cookie. It defaults to an object that you can add  
  //   key-value pairs to.  
  // 
  // req.session is 'silently' passed in as part of the request AND returned
  //   back to the browser. The data in req.session is stored in the browser 
  //   until the client makes another request.
  //
  // the contents of req.session are unique to each browser
  // 
  // req.session will live in the cookies of the browser with the name provided
  //   (in this example, "snorkles") until the user deletes the cookie.
  //
  // you can programmatically clear the cookie by setting the cookie to null:
  //   req.session = null;
  
 
  if( typeof(req.session.views)=='undefined' ) {            // if the cookie has not been set
      req.session.views = 1;                                //   set it to 1;
  } else {                                                  // otherwise, 
      req.session.views++;                                  //   increment its value
  }

  res.send("Welcome, visitor #" + req.session.views );
})

app.get('/reset', function (req, res, next) {
  req.session = null;                                       // programmatically deletes the cookie
  res.send('cookie has been reset');
})

// -------------- assign listener -------------- //
// The listener is what keeps node 'alive.' 

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
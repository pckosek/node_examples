#!/usr/bin/nodejs

// -------------- required packages -------------- //
// express server
var express = require('express')
var app = express();

var simpleoauth2 = require("simple-oauth2");
var cookieSession = require('cookie-session')
var request = require('request');
 
// -------------- library initialization stuff -------------- //
app.set('port', process.env.PORT || 8080 );

// aknowledge you are sitting behind a proxy (https://stackoverflow.com/questions/23413401/)
app.set('trust proxy', 1) 

app.use(cookieSession({
  name: 'session',
  keys: ['SuperDuperSecet_key', 'key122']
}))


// -------------- variables -------------- //

// you must first register your app at: https://ion.tjhsst.edu/oauth/

var ion_client_id = 'cjUgysdeRjDxR1FrZIb5hLVOYfGwvuiShJs8BCXC';
var ion_client_secret = '5pwXHoDdQnyuU62mGnED14fxDv6tCw2CMwWyivBMHEIuRqL6lbpD9OJPhOzqh7TAtCT18BEWoBVpPTl3NRu1adMH818iqi396okTGyjLGwVKK8BWucnDgEQK0HnSVSZf';
var ion_redirect_uri = 'https://user.tjhsst.edu/pk/login';

var oauth2 = simpleoauth2.create({
  client: {
    id: ion_client_id,
    secret: ion_client_secret,
  },
  auth: {
    tokenHost: 'https://ion.tjhsst.edu/oauth/',
    authorizePath: 'https://ion.tjhsst.edu/oauth/authorize',
    tokenPath: 'https://ion.tjhsst.edu/oauth/token/'
  }
});

var authorizationUri = oauth2.authorizationCode.authorizeURL({
    scope: "read",
    redirect_uri: ion_redirect_uri
});


// -------------- page getters  -------------- //
app.get('/', function (req, res, next) {
    // Update views 
    req.session.views = (req.session.views || 0) + 1
    var theBigString = 'Hello: '+req.session.views +'vieiw<br><a href="'+authorizationUri+'">Log in with Github</a><br>' + req.session.token;

    if (typeof req.session.token != 'undefined') {
        var access_token = req.session.token.token.access_token;
        console.log(access_token);
        request.get({url:'https://ion.tjhsst.edu/api/profile?format=json&access_token='+access_token}, function (e, r, body) {
            console.log(body);
        })
    } else {
        console.log('no token');
    }
  res.send(theBigString);

});

app.get('/login', (req, res,next) => {
    
    var theCode = req.query.code // GET parameter 'code'
    
    var options = {
        code: theCode,
        redirect_uri: ion_redirect_uri
     };
     
    oauth2.authorizationCode.getToken(options, (error, result) => {
        if (error) {
            console.log(error);
            return res.json('Authentication failed');
        }
        var token = oauth2.accessToken.create(result);
        req.session.token = token;
        console.log(req.session.token);

        return res.json(token);
    });
         
});



// -------------- listener -------------- //
var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
#!/usr/bin/nodejs

// -------------- load packages -------------- //
var cookieSession = require('cookie-session')
var express = require('express')
var simpleoauth2 = require("simple-oauth2");
var app = express();
var request = require('request');


// -------------- express initialization -------------- //

// Here, we set the port (these settings are specific to our site)
app.set('port', process.env.PORT || 8080 );

// This is included to while express is sitting behind a proxy
app.set('trust proxy', 1) // trust first proxy 


// These are keys that we'll use to encrypt our cookie session.
// If you open the developer tools, you'll find taht we only have 
// one cookie (named session). All of the subparameters that we add
// within the cookie (like the OAUTH token, and the javascript variable 
// name we give the token) will be embedded through double encryption 
// usiung these keys
app.use(cookieSession({
  name: 'session',
  keys: ['SomeSecretKeys123', 'ThatYouShouldChange456']
}))


// -------------- variable initialization -------------- //

// These are parameters provided by the authenticating server when
// we register our OAUTH client.
// -- The client ID is going to be public
// -- The client secret is super top secret. Don't make this visible
// -- The redirect uri should be some intermediary 'get' request that 
//     you write in whichyou assign the token to the session.

var ion_client_id = 'asdfhjaksdfalksdjfhalskdjfhalsdjkfha';
var ion_client_secret = 'asdfhjasdflajkhfasjdhfaslkjhfejfhasefuhasdfjhlaseufhaSeflkuahsedfkljnadkjfhasdflkajshdfalkjhfjdhsaflkajshdfjheuuhuhuhuuhuhuh';
var ion_redirect_uri = 'https://user.tjhsst.edu/pk/login';

// Here we create an oauth2 variable that we will use to manage out OAUTH operations

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

// This is the link

var authorizationUri = oauth2.authorizationCode.authorizeURL({
    scope: "read",
    redirect_uri: ion_redirect_uri
});

// -------------- express listener -------------- //

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});

// -------------- express 'get' handlers -------------- //

app.get('/', function (req, res, next) {

    // The default landing page for your site. The logic below will:
    //   -- Present you with a personalized greeting if you are logged in
    //   -- Ask you to log in if you are not logged in.
    

    // To determine login state, we look to the cookie session. The
    // cookie creates a variable req.session that is passed back to the
    // server every time you make a new request. 
    //
    // When we logged in, we attached a token to our session
    // This is essentially a 'permission slip' that grants this server
    // access to your account.
    
    // Here we ask if the token key has been attached to the session...
    if (typeof req.session.token != 'undefined') {
        // ...if the token key exists, this means that the user has
        //    already logged in.

        // Now, we create a personalized greeting page. Step 1 is to 
        // ask ION for your name, which means conducting a request in the
        // background before the user's page is even rendered.

        // To start the process of creating an authenticated request, 
        // I take out the string 'permission slip' from 
        // the token. This will be used to make an ION request with your
        // credentials
        var access_token = req.session.token.token.access_token;
        
        // Next, construct an ION api request that queries the profile using the 
        // individual who has logged in's credentials (it will return) their
        // profile
        var my_ion_request = 'https://ion.tjhsst.edu/api/profile?format=json&access_token='+access_token;

        // Perform the asyncrounous request ...
        request.get( {url:my_ion_request}, function (e, r, body) {
            // and here, at some later (indeterminite point) we land.
            // Note that this is occurring in the future, when ION has responded
            // with our profile.

            // The response from ION was a JSON string, so we have to turn it
            // back into a javascript object
            var res_object = JSON.parse(body);
        
            // from this javascript object, extract the user's name
            user_name = res_object['short_name'];

            // Construct a little page that shows their name
            var output_string = "";
            output_string += "<!doctype html>\n";
            output_string += "<html><head></head><body>\n";
            output_string += "<p>Hello "+user_name+"!</p>\n";
            output_string += "</body></html>";

            // send away the output
            res.send(output_string);
        })
        
    } else {
        // ... if the user has not logged in, we'll send them to a page 
        //     asking them to log in
        var output_string = "";
        output_string += "<!doctype html>\n";
        output_string += "<html><head></head><body>\n";
        output_string += "<a href=";
        output_string += authorizationUri;
        output_string += ">Log in with ION!</a>"
        output_string += "</body></html>";

        // send away the output
        res.send(output_string);
    }

});


// -------------- intermediary login helper -------------- //

// The name '/login' here is not arbitrary!!! The location absolutely
// must match ion_redirect_uri for OAUTH to work!

app.get('/login', function (req, res, next) {
    
    // The whole purpose of this 'get' handler is to attach your 
    // token to the session. Your users should not be going here if they
    // are not trying to login in - and you should not be attaching your 
    // login token in any other methods (like the default landing page)

    // Step one. Assuming we were send here following an authentication and 
    // that there is a code attached.
    if (typeof req.query.code != 'undefined') {
        // OK - we were given a code which likely means we're here via redirect.
        // The goal here is to transform the redirect (with a code) into an
        // authentication token that we can attach to the session.

        // This code was generated by ION. We need it to...
        var theCode = req.query.code 

        // .. construct options that will be used to generate a login token
        var options = {
            code: theCode,
            redirect_uri: ion_redirect_uri
         };

        // This token will be passed back to ion to request a token.
        oauth2.authorizationCode.getToken(options, function (error, result) {
            // ... so here we are, at some indeterminate point in the future
            // where ION has responded to our request for a token (in which we
            // sent them a little 'code')

            // If there was an error generating the token, send the user the message
            // That authentication failed
            if (error) {
                console.log(error);
                return res.send('Authentication failed');
            }

            // If there was not an error that forced redirection just then,
            // well let's turn the result into a token! And call it token!
            var token = oauth2.accessToken.create(result);
        
            // Now that we have a token, attach our permission slip to the
            // session, so that as long as we keep coming back to the site, 
            // he have those authentication credentials.
            req.session.token = token;

            // Finally, we are going to redirect the user back to the home page.
            // They'll never even know that they landed on this '/login' helper
            // because we are going to redirect them - but there will be a token
            // attached to the cookie this time upon arrival - which will render 
            // a different page this time.
            res.redirect('https://user.tjhsst.edu/pk');
        });
    } else {
        // We're here because there was no code defined in the request.
        // Let's just send them back to the default page.
        res.redirect('https://user.tjhsst.edu/pk');
    }
         
});


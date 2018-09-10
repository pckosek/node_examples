#!/usr/bin/nodejs

// -------------- load packages -------------- //
var cookieSession = require('cookie-session')
var express = require('express')
var simpleoauth2 = require("simple-oauth2");
var app = express();
var request = require('request');

var fs = require('fs');
var hbs = require('hbs');
hbs.Handlebars = require('handlebars');

// -------------- express initialization -------------- //

// PORT SETUP
app.set('port', process.env.PORT || 8080 );

// SO THAT EXPRESS KNOWS IT IS SITTING BEHIND A PROXY
app.set('trust proxy', 1) // trust first proxy 

app.use(cookieSession({
  name: 'session',
  keys: ['SuperDuperSecret', 'key1223345']
}))


// -------------- variable initialization -------------- //

// OAUTH2 Stuff
var ion_client_id = 'theshortonefasdfasdfalksdjfhalskdjfhalsdjkfha';
var ion_client_secret = 'thelongonekhfasjdhfaslkjhfejfhasefuhasdfjhlaseufhaSeflkuahsedfkljnadkjfhasdflkajshdfalkjhfjdhsaflkajshdfjheuuhuhuhuuhuhuh';
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

// Authorization uri definition
var authorizationUri = oauth2.authorizationCode.authorizeURL({
    scope: "read",
    redirect_uri: ion_redirect_uri
});

// handlebars compiled 
var index_hbs = compile_handlebars('index');

// -------------- express listener -------------- //

var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});

// -------------- express getters -------------- //

app.get('/', function (req, res, next) {
    // Update or initialize number of visits tracked by cookie
    req.session.views = (req.session.views || 0) + 1;
    
    if (typeof req.session.token != 'undefined') {
        // THERE IS A TOKEN IN THE COOKIE: THE USER HAS ALREADY LOGGED IN!
        var access_token = req.session.token.token.access_token;
        console.log(access_token);

        // ASK ION FOR THE USER NAME
        request.get({url:'https://ion.tjhsst.edu/api/profile?format=json&access_token='+access_token}, function (e, r, body) {
            console.log('AS STRING:' + body);

            var res_object = JSON.parse(body);
            console.log('AS OBJECT:' + res_object);
        
            // get the user name
            user_name = res_object['short_name'];
            render_page(req, res, user_name);
        })
        
    } else {
        // NOT LOGGED IN YET
        user_name = 'NEW USER';
        render_page(req, res, user_name);
    }

});


// -------------- intermediary login helper -------------- //
app.get('/login', function (req, res, next) {
    
    // THIS PAGE WAS CALLED WITH A GET PARAMETER 'code' BY OUR OAUTH HOST
    var theCode = req.query.code 
    
    // Construct options that will be used to generate a login token
    var options = {
        code: theCode,
        redirect_uri: ion_redirect_uri
     };

    // ASYNCHRONOUSLY REQUEST A TOKEN FROM THE SERVER
    oauth2.authorizationCode.getToken(options, function (error, result) {
        if (error) {
            console.log(error);
            return res.json('Authentication failed');
        }

        // TURN THE RESULT INTO A TOKEN
        var token = oauth2.accessToken.create(result);
        
        // ATTACH THE TOKEN TO OUR COOKIE SESSION
        req.session.token = token;
        // console.log(req.session.token);

        // DEBUG <<and massively insecurely>> display this token to the user 
        // return res.json(token);

        // Redirect authenticated user home
        res.redirect('https://user.tjhsst.edu/pk');
    });
         
});

// -------------- render helper -------------- //
function render_page(req, res, user_name) {
    var context = { user : user_name,
                    times : req.session.views,
                    login_link : authorizationUri };

    var htmlOutputString = index_hbs.run(context);
    res.send(htmlOutputString);    
}


// -------------- handlebars functions -------------- //
function compile_handlebars(f_name) {
	template = {};
	template['run'] = hbs.Handlebars.compile(
			read_file_sync(f_name)
		);
	return template;
}

function read_file_sync(f_name) {
	return fs.readFileSync(__dirname + '/views/'+f_name+'.hbs').toString();
}

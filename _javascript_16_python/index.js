#!/usr/bin/nodejs

// -------------- load packages -------------- //
var express = require('express');
var path = require('path');
var hbs = require('hbs');

// this is so that we can extract form parameters in the post methods
var bodyParser = require('body-parser')

// we'll use this for python
var child_process = require('child_process')

var app = express();


// -------------- express initialization -------------- //
app.set('port', process.env.PORT || 8080 );

app.set('view engine', 'hbs');                      //handlebars (for templating)
app.use(bodyParser.urlencoded({ extended: false})); //body parser (for handling post requests)
app.use(bodyParser.json())

// -------------- serve static folders -------------- //
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))


// -------------- express 'get' handlers -------------- //
//user root page i.e. https://user.tjhsst.edu/pckosek/
app.get('/', function(req, res){
    res.render('index');
});

// -------------- express 'post' handlers -------------- //
app.post('/process_ball_form', function(req, res){

    // determine which shape they selected
    shape_name = req.body.shape;

    // the python executable. Can be a path to a venv
    python_exe = 'python3';

    // the python file
    pythonFile = path.join(__dirname, 'python', 'py_script_01.py');

    //produce json data for python input
    jsonData = JSON.stringify(shape_name);
    feed_dict = { input: jsonData };

    // spawn the (python) child process
    py = child_process.spawnSync(python_exe, [pythonFile], feed_dict );
    
    // extract the result of the python operation
    py_response = py['stdout'].toString();
    
    // send the result back to the user
    res.send(py_response);
    
});


// -------------- listener -------------- //
var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
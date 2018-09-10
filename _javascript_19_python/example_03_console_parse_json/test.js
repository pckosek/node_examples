#!/usr/bin/nodejs

// -- NOTE - THIS IS A STAND-ALONE DEMO SCRIPT !!!!!!!!!!!!!!!!!!!!  //
//  IF YOU RUN THIS AS A SERVER, ...IT... ...WILL... ...FAIL..       //

//  to use this demo call:
//  $node test.js

//  when you are happy with the way it works, WEAVE it back into your server 
//  copy-pasting into a server does not make sense and guarantees brokenness

// -------------- load packages -------------- //
var child_process = require('child_process');
var path  = require('path');


// -------------- python executable initialization -------------- //
// the python executable. This can be a path to a venv, or whatever version of python you care
python_exe = 'python3';

// the python file you will use. 
pythonFile = path.join(__dirname, 'test.py');


// -------------- prepare data for python -------------- //

// THIS EXAMPLE PASSES AN ARRAY TO PYTHON. Binary data cannot be passeed to a child_process, 
//  so the data must be stringified (i.e. serialized, or pickled)
var arr_data = [10, 11, { Pennsylvania : 'Harrisburg' }];
var jsonData = JSON.stringify(arr_data);

// This is the data that will be passed to python. 
//  - RECALL, the values of the key 'input' will be parsed by stdin in python.
//    so again, the data
feed_dict = { input: jsonData };


// -------------- call  python -------------- //

// spawn the (python) child process syncronously
py = child_process.spawnSync(python_exe, [pythonFile], feed_dict );

// parse sys.stdout from the var py
py_response = py['stdout'].toString();

// -------------- display results -------------- //

// log the response 
console.log(py_response)
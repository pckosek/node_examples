#!/usr/bin/nodejs

// Demonstration of a file Read
var fs = require('fs');

read_text_file('foo');
read_text_file('bar');

// -------------- functions -------------- //
function read_text_file(f_name) {
	fs.readFile(__dirname + '\\'+f_name+'.txt', function(err,data){
	 if (!err) {
	    var source = data.toString();
	    console.log(source);
	  } else {
	    console.log('err');
	  }
	});
}
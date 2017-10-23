#!/usr/bin/nodejs

// Demonstration of a file Read
var fs = require('fs');

read_the_file();

// -------------- functions -------------- //
function read_the_file() {
	fs.readFile(__dirname + '\\foo.txt', function(err,data){
	 if (!err) {
	    var source = data.toString();
	    console.log(source);
	  } else {
	    console.log('err');
	  }
	});
}
#!/usr/bin/nodejs

// Demonstration of a file Read
var fs = require('fs');

read_text_file('foo');
read_text_file('bar');

var foo = read_text_file_sync('foo');
var bar = read_text_file_sync('bar');

console.log('foo: '+foo);
console.log('bar: '+bar);

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

function read_text_file_sync(f_name) {
	return fs.readFileSync(__dirname + '\\'+f_name+'.txt').toString();
}
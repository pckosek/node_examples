#!/usr/bin/nodejs

// Demonstration of a file Read
var fs = require('fs');
var hbs = require('hbs');
hbs.Handlebars = require('handlebars');


var sample_template_file = read_file_sync('sample_template.hbs');
console.log(sample_template_file);

sample_template = hbs.Handlebars.compile(sample_template_file);
var text_out_1 = sample_template( {adj: 'cool'} )
var text_out_2 = sample_template( {adj: 'easy'} )

console.log(text_out_1);
console.log(text_out_2);

// -------------- functions -------------- //
function read_file_sync(f_name) {
	return fs.readFileSync(__dirname + '\\'+f_name).toString();
}
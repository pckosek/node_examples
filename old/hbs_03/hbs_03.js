#!/usr/bin/nodejs

// Demonstration of a file Read
var fs = require('fs');
var hbs = require('hbs');
hbs.Handlebars = require('handlebars');


var stmt_1 = generate_template('sample_template.hbs');
var context = { adj : 'interesting' }

text_out = stmt_1.run(context);

console.log(text_out);


// -------------- functions -------------- //
function generate_template(f_name) {
	template = {};
	template['run'] = hbs.Handlebars.compile(
			read_file_sync(f_name)
		);
	return template;
}

function read_file_sync(f_name) {
	return fs.readFileSync(__dirname + '\\'+f_name).toString();
}


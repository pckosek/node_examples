#!/usr/bin/nodejs

// Demonstration of a file Read
var fs = require('fs');
var hbs = require('hbs');
hbs.Handlebars = require('handlebars');


var stmt = generate_template('statement_02');

console.log('------------------------')
var context_0 = { blurb : [
		{ name : 'frank', adj : 'cool'},
		{ adj : 'interesting'},
		{ name : 'bob',   adj : 'powerful'}
	]
};

text_out_0 = stmt.run(context_0);
console.log(text_out_0);


// -------------- functions -------------- //
function generate_template(f_name) {
	template = {};
	template['run'] = hbs.Handlebars.compile(
			read_file_sync(f_name)
		);
	return template;
}

function read_file_sync(f_name) {
	return fs.readFileSync(__dirname + '\\'+f_name+'.hbs').toString();
}


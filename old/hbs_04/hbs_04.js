#!/usr/bin/nodejs

// Demonstration of a file Read
var fs = require('fs');
var hbs = require('hbs');
hbs.Handlebars = require('handlebars');


var stmt = generate_template('subjective_statement');

console.log('------------------------')
var context_0 = { adj : 'interesting' }
text_out_0 = stmt.run(context_0);
console.log(text_out_0);

console.log('------------------------')
var context_1 = { adj : ['interesting'] }
text_out_1 = stmt.run(context_1);
console.log(text_out_1);

console.log('------------------------')
var context_2 = { adj : ['interesting', 'fun'] }
text_out_2 = stmt.run(context_2);
console.log(text_out_2);

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


var fs = require('fs');

// Define some function
function read_a_file(f_name) {
	return fs.readFileSync(__dirname + '\\'+f_name).toString();
}

// create a module exports element, and add our functions fo the exports
module.exports = {};
module.exports['read_a_file'] = read_a_file;
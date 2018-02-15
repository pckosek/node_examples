var helper = require('./myHelpers.js');

// 1 - the import library can contain functions
//
// clean things up by keeping the function in the library
doesBorder = helper.sharesBorder('MN', 'UT')

// log the result of our operation (this just spits out nonsense)
console.log(doesBorder)
console.log('==================')

// 2 - the import library can also contain variables
//
console.log(helper.adjacency)
console.log('==================')


// just be careful, because these are not immutable references
helper.adjacency[1] = 'd';
console.log(helper.adjacency)
console.log('==================')
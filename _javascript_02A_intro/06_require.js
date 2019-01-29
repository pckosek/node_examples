// ************************
// Example showing how to import other js files in node

// this is the file that we are going to import.
// the file is imported and given a var name
var helper = require('./myHelpers.js');

// Step 1 - the import library can contain functions
//  This is really helpful in making code clean in that 
//  it allows you to keep functions in a library, and edit the
//  method there.
var flip_result = helper.heads_tails('MN', 'UT')

// log the result of our operation, just 50/50 one or the other
console.log(flip_result)
console.log('==================')

// just be careful, because these are not immutable references
helper.sharesBorder = 'd';
console.log(helper.sharesBorder)
console.log('==================')
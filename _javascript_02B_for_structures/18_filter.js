// **************************
// ARRAY filter - Creates a new array containing
//   only the values on which the callback returns true


// create some array
var someJSArray  = [
	'one',
	'two',
	'three',
	'four',
	'five'
];


// define a callback that filters out words that do not begin 
//   with the letter 't'
function callback(elem) {
	if (elem[0] == 't') {
		return true;
	} else {
		return false;
	}
}

var filtered = someJSArray.filter( callback );


console.log(filtered + '\n')


// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
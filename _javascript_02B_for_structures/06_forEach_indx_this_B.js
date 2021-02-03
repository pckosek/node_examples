// **************************
// ARRAY FOREACH -as defined before



/* SLIGHTLY MORE ADVANCED EXAMPLE */


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// passing arguments is a useful alternatives to solving this problem with 
// global variables
function forEach_adder_logger(elem) {
	var x = this + elem;
	console.log(x)
}

console.log('--- with 100 ---')
someJSArray.forEach(forEach_adder_logger, 100);

console.log('--- with 1000 ---')
someJSArray.forEach(forEach_adder_logger, 1000);

console.log('--- with foo ---')
someJSArray.forEach(forEach_adder_logger, 'foo');

// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
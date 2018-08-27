// arrays are enclosed in square brackets []

// ************************
// arrays can be numeric 

var x = [1,2,3,4];
console.log(x);
console.log('----------------');


// ************************
// arrays can be of strings

var y = ['foo', 'bar'];	
console.log(y);
console.log('----------------');


// ************************
// arrays can contain mixed types

var z = [
		'foo',
 		'bar',
 		1,
 		2
 	];
console.log(z)
console.log('----------------');


// ************************
// arrays can contain arrays

var a = [
		[1,2,3],
		[4,5,6],
		[6,7,8]
	]
console.log(a)
console.log('----------------');


// ************************
// arrays can contain empty arrays

var b = [
		[],
		[],
		[]
	]
console.log(b)
console.log('----------------');


// ************************
// arrays can contain functions

function foo(e,f) {		// foo is a function
	return e + f;
}
var f = [
		console.log,
		Array.prototype.slice,
		function (x) {
			return x + 1;
		},
		foo
	]
console.log(f)
console.log('----------------');

// array reference:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
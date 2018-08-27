// ************************
// Javascript objects are enclosed in braces {}
// Arrays are assigned as key-value pairs


// ************************
// create an empty object
var someJSObj  = {};

console.log( someJSObj );		// log our empty object
console.log('-------------');


// ************************
// Objects should have string keys

var x = {
	'a' : 1,
	'b' : [1, 2],
	'some_key' : 'some string'
}
console.log( x );
console.log('-------------');

// ************************
// you can ACCESS values in one of two ways,
//  - dot notation, or
//  - array notation

console.log( x['a'] )
console.log( x.a )
console.log('-------------');


// ************************
// Object keys can have spaces, 
//  but this is generally a BAD idea

var x = {
	'a' : 1,
	'b' : [1, 2],
	'some key' : 'some string'
}
console.log(x)
console.log('-------------');

// ***************
// spaces are a bad idea because they do not work in dot notation

// ==> THIS RAISES AN ERROR
// console.log( x.some key )


// ************************
// Object keys can be numeric, 
//  but this is generally not recommended

var x = {
	0 : 1,
	1 : [1, 2],
	2 : 'some string'
}
console.log( x[0] )
console.log( x['1'] )
console.log('-------------');

// ==> BUT THIS RAISES AN ERROR
// console.log( x.0 )

// ************************
// Object values can be functions, 
//  this makes JS objects feel like classes

var x = {
	'a' : 1,
	'b' : [1, 2],
	'some_key' : 'some string',
	'reveal' : function() {
		console.log( 'a is: '+ this['a']);
	}
}

x.reveal()
console.log('-------------');


// OBJECT REFERENCE:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
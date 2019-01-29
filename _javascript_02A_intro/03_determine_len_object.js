// ************************
// Determine the 'length' of arrays and objects 


// ************************
// ARRAY LENGTHS

// create some array
var someJSArray = [101, 102, 103, 104, 105];

console.log( someJSArray );
console.log('-------------');


// ************************
// determine the length of the array using the length property

console.log( someJSArray.length );
console.log('-------------');


// ************************
// OBJECT LENGTHS

// create some object
var someJSObj  = {
	a : 46,
	b : 100,
	'foo' : [1, 2, 3]
};

console.log( someJSObj );
console.log('-------------');

// ************************
// determine the length of the object, by calling Object.keys to get
// the keys, and then getting the length of the result
 
objLen = Object.keys(someJSObj).length;
console.log( objLen );
console.log('-------------');	

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
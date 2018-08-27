// ************************
// How to remove a key from an object in javascript


// define some object
var someJSObj  = {
	a : 46,
	b : 100,
	'foo' : [1, 2, 3]
};

console.log( someJSObj );
console.log('-------------');


// ************************
// delete the entire key 'a'

delete someJSObj.a;
console.log( someJSObj );
console.log('-------------');	

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete


// ************************
// the hasOwnProperty method will tell you if the object has that key

if (someJSObj.hasOwnProperty('a')) {
	console.log( 'object has property \'a\'' );
} else {
	console.log( 'object does not have property \'a\'' );
}
console.log('-------------');		

if (someJSObj.hasOwnProperty('b')) {
	console.log( 'object has property \'b\'' );
} else {
	console.log( 'object does not have property \'b\'' );
}
console.log('-------------');		



// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
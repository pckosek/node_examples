// ************************
// Object.keys(...) returns the keys of an object.
//  this is a useful, fundamental method

// some basic js object
var someJSObj  = { 
	a : 46, 
	b : 100
};

console.log( someJSObj ); 		// print is out
console.log('-------------');


// ************************
// this line gets the keys and stores them as a variable
theKeys = Object.keys(someJSObj);
console.log( theKeys );
console.log('-------------');


// ************************
// you can determine the number of keys in an object, by
// calling the array length method on the keys array
console.log( 'Length is: ' + theKeys.length );
console.log('-------------');


// ************************
// this will return the first key of the array
console.log( theKeys[0] );
console.log('-------------');
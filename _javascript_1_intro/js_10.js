// Fancy time!!!!

// javascript objects can contain arrays
var someJSObj  = { a : 46, b : 100, 'foo' : [1, 2, 3] };


console.log('-------------');
console.log( someJSObj );
console.log('-------------');


// FOR STRUCTURE

// get the keys
theKeys = Object.keys(someJSObj);

// Why doesn't this work? What is the fix?
for (var indx = 0; indx < theKeys.length; indx++) {
	console.log( someJSObj[indx] )
	console.log('-------------');
};
// create some object
var someJSObj  = { a : 46, b : 100, 'foo' : [1, 2, 3] };

console.log('-------------');
console.log( someJSObj );
console.log('-------------');

// determine the length of the object.
objLen = Object.keys(someJSObj).length;

console.log('-------------');
console.log( objLen );
console.log('-------------');	

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
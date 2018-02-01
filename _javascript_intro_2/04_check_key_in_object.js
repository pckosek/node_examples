// How to remove a key from an object in javascript
var someJSObj  = { a : 46, b : 100, 'foo' : [1, 2, 3] };

console.log('-------------');
console.log( someJSObj );
console.log('-------------');

if (someJSObj.hasOwnProperty('a')) {
	console.log( 'object has property \'a\'' );
	console.log('-------------');		
}

if (someJSObj.hasOwnProperty('f')) {
	console.log( 'object has property \'f\'' );
	console.log('-------------');		
}


// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
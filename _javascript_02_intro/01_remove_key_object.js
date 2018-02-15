// How to remove a key from an object in javascript
var someJSObj  = { a : 46, b : 100, 'foo' : [1, 2, 3] };


console.log('-------------');
console.log( someJSObj );
console.log('-------------');

delete someJSObj.a;
console.log('-------------');
console.log( someJSObj );
console.log('-------------');	

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
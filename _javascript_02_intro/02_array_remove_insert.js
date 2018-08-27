// ************************
// the array SPLICE function. This can be used to
//  - remove individual elements from an array
//  - insert objects into an array at a specified position


// define some arrays
var someJSArray = [0, 1, 2, 3, 4, 5];
var otherJSArray = [10, 11, 12, 13, 14, 15];

console.log( someJSArray );
console.log( otherJSArray );
console.log('-------------');


// ************************
// WITH TWO ARGUMENTS:
// splice operates at position 2, removing 3 elements

someJSArray.splice(2, 3);


console.log( someJSArray );
console.log('-------------');


// ************************
// WITH THREE ARGUMENTS:
// splice operates at position 2:
//  - removing 0 items and 
//  - inserting third argument
otherJSArray.splice(2, 0, 'oh, hello');

console.log( otherJSArray );
console.log('-------------');

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// ************************
// This example shows how to determine if an array contains a value
// as well as how to find the index of an object in an array

// define some array
var someJSArray = [100, 101, 102, 103, 104, 105];

console.log( someJSArray );
console.log('-------------');


// ************************
// determine if the arrray includes this particular value
// - here, we expect it to return true

hasOneOhThree = someJSArray.includes(103);

console.log( 'Result of includes(103): ' + hasOneOhThree );
console.log('-------------');

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes



// ************************
// determine the index of an array for a value
// - here, we expect it to return 3

oneOhThreeIndex = someJSArray.indexOf(103);

console.log( 'index of 103: ' + oneOhThreeIndex );
console.log('-------------');


// ************************
// if an element is not in an array, indexOf will return -1
// - here, we expect it to return -1

oneOhThreeIndex = someJSArray.indexOf(109);

console.log( 'index of 109: ' + oneOhThreeIndex );
console.log('-------------');

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
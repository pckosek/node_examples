// ************************
// in this example, we:
//  - initialize an empty array.
//  - assign a value to the zeroth spot
//  - assign a value to the tenth spot
//
// this is a demonstration of how the array will expand
// to fill up the shape required


// ************************
// initialize an empty array
var someJSArray  = [];

console.log('-------------');
console.log( someJSArray );			// display contents
console.log('-------------');

// ************************
// assign value to spot 0
someJSArray[0]  = 1;
console.log( someJSArray );
console.log('-------------');


// ************************
// assign value to tenth spot
// missing values are filled with emptiness as the array will
//  expand as you access and populate by index
someJSArray[9]  = 1;
console.log( someJSArray );
console.log('-------------');
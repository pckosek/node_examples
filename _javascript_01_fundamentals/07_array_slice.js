// ************************
// this example looks at the slice function.
// slice grabs a subset of an array

// arrays use brackets
var someJSArray  = [1000, 1001, 1002, 1003];


console.log('-------------');
// ************************
// subset starting at indx 0,
//  up to but not including indx 1
console.log( someJSArray.slice(0,1) ); //

// demonstration that this is a non-destructive operation
console.log( someJSArray ); 
console.log('-------------');


// ************************
// subset starting at indx 0,
//  up to but not including indx 2
console.log( someJSArray.slice(0,2) );
console.log('-------------');


// ************************
// subset starting at indx 1,
//  up to but not including indx 2
console.log( someJSArray.slice(1,2) );
console.log('-------------');


// ************************
// subset starting at indx 3,
//  up to but not including the lenght
console.log( someJSArray.slice(3, someJSArray.length) );
console.log('-------------');


// ************************
// subset starting at the end - but this returns an array
console.log( someJSArray.slice(-1) );

// ************************
// THE WAY TO GET THE LAST ELEMENT OF AN ARRAY!
// subset starting at the end - grab the only element 
// so that the result is not an array
console.log( someJSArray.slice(-1)[0] );
console.log('-------------');

// ARRAY SLICE REFERENCE:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
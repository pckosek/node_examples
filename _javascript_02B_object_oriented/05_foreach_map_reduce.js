// ************************
// The following are some of the most useful functions that 
// exist in JS.
//
// forEach - iterate through array
// map (for arrays)
// reduce


// ************************
// ARRAY FOREACH - call a function on each element of an array
//  forEach does not return any results. This is useful when 
//  you want to do something based on your data, as opposed to change
//  your data

// create some array
var someJSArray = [101, 102, 103, 104, 105];

someJSArray.forEach( function(elem) {
  console.log(elem);
});
console.log('-------------')


// REFERENCE:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach



// ************************
// ARRAY MAP - create a new array by calling function on each element
//  map is a fast way to change data. Use this method instead of forEach 
//  when you want to produce output.

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// this mapping function will multiply each element by 3
var map1 = someJSArray.map( function(elem) {
  return elem*3;
});

console.log(map1)
console.log('-------------')

// REFERENCE:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map



// ************************
// ARRAY REDUCE - iterate over an array, but with the selective ability
//  to add it to the output array (or object).
//  Use this method when you want to do a reduce with greater output control.

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// this mapping function will:
//  - multiply each element by 3, and 
//  - add it to output array  
var red = someJSArray.reduce( function(out_val, curr) {

  console.log('current output state: '+out_val);
  										// log the value of the output
  thisVal = curr * 3;					// multiply the current element by 3;

  if (curr !==103 ) {					// if the current value is not 103
  	out_val.push(thisVal);				//   append our value to the output
  }
  
  return out_val;						// IMPORTANT!!! YOU *MUST* 
  										//  RETURN THE CURRENT OUTPUT STATE
  										//  IN EACH STEP OF reduce

}, [] );								// Initialize the output.

console.log(red)
console.log('-------------')

// REFERENCE:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
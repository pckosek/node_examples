// ************************
// ARRAY MAP- as defined before

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// elem will contain the current value of the array being mapped
// this will contain the argument passed to the map function
function times_something(elem) {
  return elem*this;
}

// this mapping function will multiply each element by the second parameter
var timesed_3  = someJSArray.map( times_something, 3 );
var timesed_10 = someJSArray.map( times_something, 10 );

console.log(timesed_3);
console.log(timesed_10);


/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

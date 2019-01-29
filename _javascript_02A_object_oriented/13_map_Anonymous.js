// ************************
// ARRAY MAP- as defined before

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// this mapping function will multiply each element by the second parameter
var timesed_4  = someJSArray.map( function (elem) {
  return elem*4;
});

console.log(timesed_4);


/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

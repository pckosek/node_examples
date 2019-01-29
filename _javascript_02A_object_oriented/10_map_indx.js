// ************************
// ARRAY MAP - as defined before

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// elem will contain the current value of the array being mapped
// indx will contain the current index of the value 
function times_three(elem, indx) {
  console.log(indx);
  return elem*3;
}

// this mapping function will multiply each element by 3
var mapped = someJSArray.map( times_three );

console.log(mapped);


/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

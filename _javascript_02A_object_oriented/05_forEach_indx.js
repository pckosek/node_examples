// ************************
// ARRAY FOREACH - as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// define a function that will be called on each element
//  NOTE that you can optionally pass the index to this helper function
function each_helper(elem, indx) {
  console.log(indx + " : " + elem);
}

someJSArray.forEach( each_helper );

/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
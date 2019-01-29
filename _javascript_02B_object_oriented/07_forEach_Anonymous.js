// ************************
// ARRAY FOREACH - as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// define a function that will be called on each element
//  NOTE!!! Here our callback function has been converted into an Anonymous function 

someJSArray.forEach( function (elem, indx) {
    console.log(indx + " : " + elem);
});



/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
// ************************
// ARRAY FOREACH - as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// define a function that will be called on each element
//  NOTE!!! that the variable => this <== contains arguments passed to the forEach function.
function each_logger(elem, indx) {
  console.log(indx + " : " + elem + " , " + this);
}

someJSArray.forEach( each_logger, 'foo' );



/* -------------------------------*/
/* SLIGHTLY MORE ADVANCED EXAMPLE */

// passing arguments is a useful alternative to trying to solve this with global variables
function forEach_adder_logger(elem) {
  var x = this + elem;
  console.log(x);
}
someJSArray.forEach( forEach_adder_logger, 100  );
someJSArray.forEach( forEach_adder_logger, 1000 );



/* ------------------------------------*/
/* SLIGHTLY EVEN MORE ADVANCED EXAMPLE */

// the argument passed to forEach can be as compex of a JS object as you wish
function forEach_keyed_adder_logger(elem) {
  var x = this.offset + elem;												// here you specify
  console.log(x);
}

var obj = { 'offset' : 5000 };
someJSArray.forEach( forEach_keyed_adder_logger, obj  );					// as long as the object has 
someJSArray.forEach( forEach_keyed_adder_logger, { 'offset' : 10000 } );



/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
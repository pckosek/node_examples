// ************************
// ARRAY REDUCE - as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// This example uses reduce to perform a sum of the array. It's the canonical 
//  example of how to use the reduce operator.

// out_state will contain the current output state of the operation
// curr will contain the current value of the array being reduced
// indx will contain the index of the current value of the array being reduced

var reduced = someJSArray.reduce( function (out_state, curr, indx) {
	out_state = out_state + curr;
	console.log(out_state + ' : ' + curr + ' : ' + indx);
	return out_state
}); 
console.log(reduced);



/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
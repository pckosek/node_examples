// ************************
// ARRAY REDUCE - iterate over an array, but complete definition over the 
//  output (as opposed to map, which will always return an array of the same
//	size of the input)
//  Use reduce when you want to do a map with greater output control.

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// out_state computed and passed to the next iteration of the callback function
//  for each element in the array.

// IF no initial value is passed to reduce, the initial value of the ouput state will
//  be the first value of the array (as executed in line 24)
//  NOTE!! the callback function (plus_one) will only operate on the SECOND through last values

// A initial value can be passed as a second argument to the reduce function
//  (as executed in lines 25 and 26)
//  NOTE!! the callback function (plus_one) will operate on ALL VALUESs



function plus_one(out_state) {
	console.log(out_state);
	out_state = out_state + 1;
	return out_state;
}

var reduced_101 = someJSArray.reduce( plus_one ); 
var reduced_000 = someJSArray.reduce( plus_one, 0 ); 
var reduced_str = someJSArray.reduce( plus_one, 'foo' ); 

console.log("reduced_101 = "+reduced_101);		// 105      (why?)
console.log("reduced_000 = "+reduced_000);		// 5        (why?)
console.log("reduced_str = "+reduced_str);		// foo11111	(why?)

/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
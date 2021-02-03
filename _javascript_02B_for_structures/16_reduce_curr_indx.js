// **************************
// ARRAY REDUCE - iterate over an array, but complete control over
//  the output (as opposed to map, which will always return an array
//  of the same size and shape as the input)
//  Use reduce when you want to:
//    - do a 'map' with greater control
//    - transform your data


// create some array
var someJSArray  = [101,102,103,104,105];

function callback(out_state, curr, indx) {
	out_state = out_state + curr
	console.log(out_state + " : " + curr + " : " + indx);
	return out_state;
}

var reduced = someJSArray.reduce( callback )
console.log(reduced + '\n')

var reduced = someJSArray.reduce( callback, 0 )
console.log(reduced + '\n')

// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
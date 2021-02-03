// **************************
// ARRAY REDUCE - iterate over an array, but complete control over
//  the output (as opposed to map, which will always return an array
//  of the same size and shape as the input)
//  Use reduce when you want to:
//    - do a 'map' with greater control
//    - transform your data


// create some array
var someJSArray  = [101,102,103,104,105];

function plus_one(out_state) {
	console.log(out_state);
	out_state = out_state + 1;

	return out_state;
}

var red_101 = someJSArray.reduce( plus_one )
console.log(red_101 + '\n')

var red_102 = someJSArray.reduce( plus_one, 0 )
console.log(red_102 + '\n')

var red_103 = someJSArray.reduce( plus_one, 'foo' )
console.log(red_103 + '\n')


// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
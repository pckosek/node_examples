// **************************
// ARRAY REDUCE - iterate over an array, but complete control over
//  the output (as opposed to map, which will always return an array
//  of the same size and shape as the input)
//  Use reduce when you want to:
//    - do a 'map' with greater control
//    - transform your data


// create some array
var someJSArray = [101, 102, 103, 104, 105];


// REDUCE works by transforming the output state
//  in each call to the callback function
//  what you RETURN in each call to the callback function
//  becomes the value of the FIRST ARGUMENT in the next iteration 
//    of the callback function


function basic_integral(output_state, current_item){
	console.log("total: <" + output_state + ">, current: <" + current_item +">")
	return output_state + current_item;
}

// YOU MAY HAVE NOTICED THAT THE FIRST VALUE IS AUTOMATICALLY
// PLACED INTO OUTPUT STATE unless YOU SPECIFICY INITIAL OUTPUT_STATE


var summed_0 = someJSArray.reduce(basic_integral, 0)
console.log(summed_0)
console.log('')

var summed_1 = someJSArray.reduce(basic_integral, 1000)
console.log(summed_1)


// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
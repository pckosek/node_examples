// **************************
// ARRAY REDUCE - iterate over an array, but complete control over
//  the output (as opposed to map, which will always return an array
//  of the same size and shape as the input)
//  Use reduce when you want to:
//    - do a 'map' with greater control
//    - transform your data


// create some array
var someJSArray  = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 23 }
];

// REDUCE works by transforming the output state
//  in each call to the callback function
//  what you RETURN in each call to the callback function
//  becomes the value of the FIRST ARGUMENT in the next iteration 
//    of the callback function


function minimum_age(output_state, current_item){

	console.log("Current minimum is: "+ output_state)
	return Math.min(output_state, current_item.age)

}

var min_age = someJSArray.reduce(minimum_age, Infinity)
console.log(min_age)


// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
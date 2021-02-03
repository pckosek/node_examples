// **************************
// ARRAY MAP - as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];


// elem will contain the current value of the array being mapped
//   AND <this> will contain the argument passed to the map function
function times_something(elem) {
	return elem*this;
}



// in this example we scale an entire array by 3
var scaled_3  = someJSArray.map( times_something, 3 );
console.log(scaled_3)

// in this example we scale an entire array by 10
var scaled_10 = someJSArray.map( times_something, 10 );
console.log(scaled_10)




// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
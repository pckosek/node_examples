// **************************
// ARRAY MAP - map is a fast way to change data. Use this method instead of forEach
// when you want to produce output.


// create some array
var someJSArray = [101, 102, 103, 104, 105];


// elem will contain the current value of the array being mapped
function times_three(elem) {
	return elem*3;
}


// use of this mapping function will multiply each element by three 
// AND return the result as a new array

var mapped = someJSArray.map( times_three );

console.log(mapped)



// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
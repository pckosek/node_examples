// arrays are indexed using square brackets []


// ************************
// simple array indexing

var x   = [1,2,3,4]; 		// a numeric array 
var x_1 = x[1];				// the second element of the array
console.log(x_1);

console.log('----------------');


// ************************
// multi dimensional array indexing

var a = [
		[1,2,3],
		[4,5,6],
		[6,7,8]
	]					// a two dimensional array


console.log( a[0] )		// the first element of a
console.log('+--------------+');
console.log( a[0][2] )	// the second element in the first element of a
console.log('----------------');
// **************************
// ARRAY MAP - as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];


// the anonymous mapping function here will scale the entire array by 4

var scaled_4 = someJSArray.map( function(elem){
	return elem*4;
})


console.log(scaled_4)




// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// ************************
// ARRAY FILTER - Creates a new array containing
//  only the values on which the callback function returned true.


// create some array
var someJSArray = [101, 102, 103, 104, 105];


// elem will contain the current value of the array being filtered
// indx will contain the index of the current value of the array being filtered
// arr will contain the original array

// the callback function here always returns true. You could get more useful results
// by running selective conditional tests
function callback(elem, curr, arr) {
	console.log(elem + ' : ' + curr + ' : ' + arr + ' : ' + this);
	return true;
}

var filtered = someJSArray.filter( callback ); 
console.log(filtered);

var reduced = someJSArray.filter( callback, 123.4 ); 
console.log(filtered);


/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
*/
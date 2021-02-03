// **************************
// ARRAY filter - Creates a new array containing
//   only the values on which the callback returns true


// create some array
var someJSArray  = [
  { name: 'Alice', age: 21 },
  { name: 'Carl', age: 18 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 23 },
  { name: 'Bob', age: 19 }
];


// define a callback that filters out people who are older than
//  a 20
function callback(elem) {
	if (elem.age > this) {
		return true;
	} else {
		return false;
	}
}

var filtered = someJSArray.filter( callback, 22 );


console.log(filtered)
// console.log( JSON.stringify(filtered))

// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
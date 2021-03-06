// **************************
// ARRAY FOREACH -call a function on each element of an array
//  forEach does not return any results. This is useful when
//  you want to do something based on your data, as opposed to change
//  your data

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// define a function that will be called on each element
function each_helper(elem) {
	console.log(elem)
}

someJSArray.forEach(each_helper);

// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
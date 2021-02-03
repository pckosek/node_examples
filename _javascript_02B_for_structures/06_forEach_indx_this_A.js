// **************************
// ARRAY FOREACH -as defined before

// create some array
var someJSArray = [101, 102, 103, 104, 105];

// define a function that will be called on each element
// NOTE! !! that the variable <this> contains arguments passed to the forEach function.

function each_logger(elem,indx) {
	console.log(indx + " : " + elem + " , " + this);
}

someJSArray.forEach(each_logger, 'foo');

// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
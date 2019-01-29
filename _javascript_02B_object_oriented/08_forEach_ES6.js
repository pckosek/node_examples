// ************************
// ARRAY FOREACH - as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// In Javascript ES6 a new notation was introduced. In this example, we
//  are saying that there is an anonymous function with a single argument (elem)
//  the contents of the function follow the fat arrow =>
//  multi-line functions are encapsulated in curly braces {}

someJSArray.forEach( (elem) => console.log(elem+'.') );
someJSArray.forEach( (elem) => { 
	var y = elem/2;
	console.log(y+'!')
});



/*
 function reference:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
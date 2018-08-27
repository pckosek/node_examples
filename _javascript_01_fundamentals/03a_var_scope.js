// scope of variables


var x = 1;			// define x. Scope is global
doSomething()		// call doSomething. 
console.log(x);		// display x.

function doSomething() {
	x += 1;
}

// notice that x was incremented.


// var scope REFERENCE:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
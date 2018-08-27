// scope of variables


var x = 1;			// define x. Scope is current execution context, here "global" 
doSomething()		// call doSomething. 

console.log(x);		// display x (works).
console.log(y);		// display y (doesn't work).

function doSomething() {
	var y = 12;     // define y. Scope is current execution context.
	x += 1;
}

// notice that x was incremented.
// notice that y causes problems.


// var scope REFERENCE:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
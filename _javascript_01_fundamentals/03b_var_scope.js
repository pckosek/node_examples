// ************************
// scope of variables - Part b


// in this example, we:
//  - declare a variable using var
//    - access the variable inside of a function
//    - declare a variable inside of a function using var (local within function)
//  - return to top level and try to access local var out of context


var x = 1;			// define x. Scope is current execution context, here effectively "global" 
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
// ************************
// scope of variables - Part c


// in this example, we:
//  - declare x (global)
//    - create a local x inside of a function
//    - twiddle local x in local context
//  - return to top level and examine x


x = 1;			    // define x. Scope is global
doSomething()		// call doSomething. 

console.log(x);		// display x (works).

function doSomething() {
	var x = 12;     // define y. Scope is current execution context.
	x += 1;
}

// notice that x was NOT incremented.


// var scope REFERENCE:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
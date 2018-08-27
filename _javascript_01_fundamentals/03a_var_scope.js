// ************************
// scope of variables - Part a
//
// scope is very important in JS - and you need to pay 
// attention to it. Putting var in front of a variable 
// assigns the scope to the 'current execution context'
// You have to be careful, because without var, variables 
// are global!!!

// in this example, we:
//  - declare a variable using var
//  - access the variable inside of a function
//  - come back out inot global space and see what happened


x = 1;				// define x. Scope is global
doSomething()		// call doSomething. 
console.log(x);		// display x.

function doSomething() {
	x += 1;
}

// notice that x was incremented because doSomething could access it!


// var scope REFERENCE:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
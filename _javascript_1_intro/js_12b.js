// scope of variables

doSomething()
console.log(y)

function doSomething() {
	// SCOPE OF Y is global, since it is not constrained
	// by VAR 
	y = 1;
	console.log(y);
}
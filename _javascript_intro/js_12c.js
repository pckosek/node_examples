// scope of variables

doSomething()
console.log(y) // FAILS

function doSomething() {
	// SCOPE OF Y is local, since it IS constrained
	// by VAR 
	var y = 1;
	console.log(y);
}
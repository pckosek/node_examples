// scope of variables

var x = 1;
doSomething()
console.log(x);

function doSomething() {
	x += 1;
	console.log(x);
}
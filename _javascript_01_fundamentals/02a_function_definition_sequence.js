// javascript sequentiall steps through the file
// but this still works - you can call a function before
// it is declared.

doSomething();



function doSomething() {
	console.log( 'doSomething was called');
}
// ************************
// Object Oriented Programming - timers
//
// you can pass additional arguments to setInterval
//  and use them in the callback function


// create a function that will be passed to the setInterval function
function spewOutput(arg1) {
	console.log('output: ' + arg1);
}

setInterval(spewOutput, 100, 123.3);

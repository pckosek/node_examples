// ************************
// Object Oriented Programming - timers
//
// setInterval creates a timer with a handle, a callback
// and a periodicity in ms


// create a function that will be passed to the setInterval function
function spewOutput() {
	console.log('output!');
}

setInterval(spewOutput, 100);

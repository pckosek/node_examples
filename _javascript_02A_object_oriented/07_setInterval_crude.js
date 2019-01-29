// ************************
// setInterval - timers
//
// setInterval creates a timer with a handle, a callback
// and a periodicity in ms


// create a var that will be the timer
var timer_1;

// create a method that will create the timer output
function startTheTimer() {
	timer_1 = setInterval(spewOutput, 100);
}

// create a callback 
function spewOutput() {
	console.log('output!');
}

// run the timer
startTheTimer();
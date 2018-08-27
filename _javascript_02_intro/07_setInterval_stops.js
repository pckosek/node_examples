// ************************
// setInterval - timers
//
// In this example we can turn the timer off.


// create a var that will be the timer
var timer_1;

// create a var that will count up
var count = 0;

// the method that creates the timer
function startTheTimer() {
	console.log('called startTheTimer');
	timer_1 = setInterval(spewOutput, 100);
}

// the method that kills the timer
function stopTheTimer() {
	console.log('called stopTheTimer');
	clearInterval(timer_1);
}

// the callback function
function spewOutput() {
	console.log('output: '+count);	
	count++;

	// check if value > 10, if so kill timer.
	if (count > 10 ) {
		stopTheTimer();
	}

}

// run the script
startTheTimer();
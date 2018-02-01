var timer_1;
var count = 0;

function startTheTimer() {
	console.log('called startTheTimer');
	timer_1 = setInterval(spewOutput, 100);
}

function stopTheTimer() {
	console.log('called stopTheTimer');
	clearInterval(timer_1);
}

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
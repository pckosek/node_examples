var timer_1;

function startTheTimer() {
	timer_1 = setInterval(spewOutput, 100);
}

function spewOutput() {
	console.log('output!');
}

startTheTimer();
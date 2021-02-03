// **************************
// Object Oriented Programming - timers
//
// you can pass additional arguments to setInterval
// and use them in the callback function

function spewOutput(arg1){
	console.log( 'output:' + arg1 );
}

setInterval( spewOutput, 100, 123.3 );
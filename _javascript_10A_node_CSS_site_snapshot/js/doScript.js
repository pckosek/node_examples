// ---------- UNIX TIMER FUNCTIONS ---------- //

function startUnixTimer() {
	timer_2 = setInterval(displayUnixTimer, 100);
}

function stopUnixTimer() {
	clearInterval(timer_2);
}

function displayUnixTimer() {
	
	DisplayBox.innerHTML = Date.now();
}

var DisplayBox = document.getElementById('textField_1');

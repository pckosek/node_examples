var count_span = document.querySelector("#counter");
var my_count = 0;

var h = setInterval( function(){
	my_count++;
	count_span.innerHTML = my_count;
})
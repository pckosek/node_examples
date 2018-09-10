// Identify the element where we will put our result
var resultSpan = document.getElementById('res');



function flipCoin() {
    // JQUERY AJAX!!!!
    // $.get means perform a 'get request' - a function call to our server
    // $.get s performed in javascript make a server call, and get the result as a String
    // here, that strig is called data, and what you do with that string (data) is up to you!
    // I am choosing to stuff it into resultSpan
    

    $.get( "flipcoin", function( data ) {
        console.log(data);
        resultSpan.innerHTML = data;
    })
}
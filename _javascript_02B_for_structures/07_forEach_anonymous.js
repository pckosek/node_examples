// **************************
// ARRAY FOREACH -as defined before


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// NOTE !! Here our callback function is anonymous!

function forEach_keyed_adder_logger(elem) {
	var x = this.offset + elem;
	console.log(x)
}
someJSArray.forEach( function(elem,indx){
	console.log(indx + " : " + elem)
});


// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
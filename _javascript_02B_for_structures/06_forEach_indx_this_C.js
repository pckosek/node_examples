// **************************
// ARRAY FOREACH -as defined before



/* SLIGHTLY EVEN MORE ADVANCED EXAMPLE */


// create some array
var someJSArray = [101, 102, 103, 104, 105];

// the argument passed to forEach can be as complex of a JS object as you wish
function forEach_keyed_adder_logger(elem) {
	var x = this.offset + elem;
	console.log(x)
}

console.log('-- object 1--')
var obj_1 = { 'offset' : 100 }
someJSArray.forEach(forEach_keyed_adder_logger, obj_1);

console.log('-- object 2--')
var obj_2 = { 'offset' : 5000 }
someJSArray.forEach(forEach_keyed_adder_logger, obj_2);

// function reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
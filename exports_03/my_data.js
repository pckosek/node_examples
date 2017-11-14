 // Define some function
function doMethodA() {
	console.log('method A');
}

 // Define another function
function doMethodB() {
	console.log('method B');
}

// create a module exports element, and add our functions fo the exports
module.exports = {};
module.exports['doMethodA'] = doMethodA;
module.exports['doMethodB'] = doMethodB;
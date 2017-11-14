function doMethodA() {
	console.log('method A');
}

function doMethodB() {
	console.log('method B');
}

module.exports = {};
module.exports['doMethodA'] = doMethodA;
module.exports['doMethodB'] = doMethodB;
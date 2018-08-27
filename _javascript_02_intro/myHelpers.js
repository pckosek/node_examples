// ************************
// this is effectively a library that will be imported


// create a private variable
adjacency = [ 
		[1], 
		[0, 3], 
		[3], 
		[1, 2]
	]


// create a private method
function private_getBorder(indx) {
	return adjacency[indx];
}

// create a dummy function. This method randomly returns
//  true or false 50% of the time, regardless of input
function rando_dummy_function(state_1, state_2) {
	return Math.random() >= 0.5;
}

// assigning a value to the module.exports object, that becomes 
// publicly available when the library is 'required'

// as a result of the line below, you can call the method
// sharesBorder when you require this file, and the function 
// that will be called is rando_dummy_function
module.exports.sharesBorder = rando_dummy_function;
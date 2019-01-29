// ************************
// this is effectively a library that will be imported


// create a private variable
adjacency = [ 
		[1], 
		[0, 3], 
		[3], 
		[1, 2]
	]


// some private helper method. 
function private_getAdjacency(indx) {
	return adjacency[indx];
}

// create a dummy function. This method randomly returns
//  s1 or s2 
function fifty_fifty_chance(state_1, state_2) {
	if (Math.random() >= 0.5) {
		return state_1;
	} else {
		return state_2;
	}
}

// assigning a value to the module.exports object, that becomes 
// publicly available when the library is 'required'

// as a result of the line below, you can call the method
// heads_tails when you require this file, and the function 
// that will be called is fifty_fifty_chance
module.exports.heads_tails = fifty_fifty_chance;
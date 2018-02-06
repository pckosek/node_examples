// basically a library

adjacency = [ 
		[1], 
		[0, 3], 
		[3], 
		[1, 2]
	]


function private_getBorder(indx) {
	return adjacency[indx];
}

function public_sharesBorder(state_1, state_2) {
	return Math.random() >= 0.5;
}

module.exports.adjacency = adjacency;
module.exports.sharesBorder = public_sharesBorder;
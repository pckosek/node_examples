var x = [
   [ 0.91,  4.31,  2.10,  0.07],
   [-1.80, -5.88, -6.16, -0.79],
   [ 1.47, -0.59, -1.06, -5.25],
   [ 2.22, -3.62, -2.47, -0.86],
   [ 5.14,  8.72, -4.73, -2.49],
   [-0.58,  2.48,  1.52, -2.94],
   [-6.42,  4.14,  0.85, -3.47],
   [-2.52, -3.17,  0.10, -1.60],
   [ 4.06, -1.41, -4.00, -6.01],
   [-3.22, -0.82,  3.38,  2.89],
   [ 2.88,  3.30,  1.05,  1.56],
   [ 0.37, -0.83, -0.90, -0.06]
]

function myFunction(list, elem){

	var res = elem.reduce( function(acc, elem){
		acc += Math.pow(elem,2);
		return acc;
	}, 0);

	list.push(Math.sqrt(res));

	return list;
}

var out = x.reduce(myFunction, []);
console.log(out);
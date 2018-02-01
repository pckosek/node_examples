var someJSArray = [100, 101, 102, 103, 104, 105];


console.log('-------------');
console.log( someJSArray );
console.log('-------------');

// determine if the arrray includes this particular value
hasOneOhThree = someJSArray.includes(103);

console.log('-------------');
console.log( 'Result of includes(103): ' + hasOneOhThree );
console.log('-------------');

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

oneOhThreeIndex = someJSArray.indexOf(103);

console.log('-------------');
console.log( 'index of 103: ' + oneOhThreeIndex );
console.log('-------------');

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
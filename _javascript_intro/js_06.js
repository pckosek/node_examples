
// arrays use brackets
var someJSArray  = [1000, 1001, 1002, 1003];

// the slice function returns a subset of an array - starting at p1, up to BUT NOT including p2

console.log('-------------');
console.log( someJSArray.slice(0,1) );
console.log('-------------');
console.log( someJSArray.slice(0,2) );
console.log('-------------');
console.log( someJSArray.slice(1,2) );
console.log('-------------');
console.log( someJSArray.slice(3, someJSArray.length) );

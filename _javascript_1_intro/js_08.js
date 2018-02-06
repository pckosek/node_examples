// Javascritp objects are key value pairs
var someJSObj  = {};


console.log('-------------');
console.log( someJSObj );
console.log('-------------');

// keys are created as you specify them
someJSObj['a']  = 1;
console.log( someJSObj );
console.log('-------------');


someJSObj['b']  = 1;
console.log( someJSObj );
console.log('-------------');

// it's generally a bad idea to use numbers as keys, since they get interpreted as strings.
// Furthermore, this is a hash, and numbers imply enumeration that is not present

someJSObj[0]  = 'zero';
console.log( someJSObj );
console.log('-------------');


// these both work. Can lead to confusion
console.log( someJSObj[0] );
console.log('-------------');

console.log( someJSObj['0'] );
console.log('-------------');


// here's why. keys can be accessed in dot notation or in 'array' notation.
// Array notation is generally safer. dot will break down faster

console.log('===================');
console.log( someJSObj.a );
console.log('-------------');
console.log( someJSObj['a'] );
console.log('-------------');

console.log('===================');
// console.log( someJSObj.0 );  I COMMENTED THIS BECAUSE IT FAILS
console.log('-------------');
console.log( someJSObj['0'] );
console.log('-------------');

console.log('===================');
// add a key with spaces (generally a bad idea anyway)
someJSObj['New York'] = 'Albany';

console.log( someJSObj );
console.log('-------------');
console.log( someJSObj['New York'] );
console.log('-------------');
// console.log( someJSObj.New York );  I COMMENTED THIS BECAUSE IT FAILS
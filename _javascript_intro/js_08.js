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

someJSObj[0]  = 1;
console.log( someJSObj );
console.log('-------------');


// these both work. Can lead to confusion
console.log( someJSObj[0] );
console.log('-------------');

console.log( someJSObj['0'] );
console.log('-------------');

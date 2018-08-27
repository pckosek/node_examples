// Javascritp objects are key value pairs
var someJSObj  = { a : 46, b : 100};


console.log('-------------');
console.log( someJSObj );
console.log('-------------');


// the keys of an object can be returned as an array
// using Object.keys


theKeys = Object.keys(someJSObj);
console.log( theKeys );
console.log('-------------');
console.log( 'Length is: ' + theKeys.length );
console.log('-------------');
console.log( theKeys[0] );
console.log('-------------');
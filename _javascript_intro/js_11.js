// Functions can be variables

var x = console.log;
var y = Math.random;

// Stuff these functions into a JS object, because, why not!
var someObject = { 'key1' : x, 'key2' : y };

console.log( someObject );

// ok, this is where it gets crazy.

x(4);
// What just happened?

x('hi');
// huh?

x('---------------')

someObject.key1('omg');
x(someObject.key2());
// WAAAAAAAAAA!
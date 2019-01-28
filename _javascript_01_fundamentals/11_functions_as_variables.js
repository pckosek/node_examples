// ************************
// When functions get involved, you can make 
// objects do strange and interesting things



var x = console.log;	// x is the console.log function

x(4);					// what did this do?
x('hi');				// what did this do?
x('---------------');	// what did this do?



var y = Math.random;	// y is the random function
x('=>')
x(y);
x('\n')

x('==>')
x( y() );
x('\n')


// Stuff these functions into a JS object, because, why not!
var someObject = {
	'key1' : x,
	'key2' : y
};

console.log( someObject );

// ************************
// ok, this is where it gets interesting.

someObject.key1('omg');	 // what did this do?
x(someObject.key2());    // what did this do?
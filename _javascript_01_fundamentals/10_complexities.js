// ************************
// The following are examples of more complext things
// that you can accomplish with js objects and arrays



// ************************
// objects can be very complex subsets of nested
// objects and arrays
// example from: https://json.org/example.html

var x = {"widget": {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}    


// ************************
// When functions get involved, you can make 
// objects do strange and interesting things

var x = console.log;	// x is the console.log function
var y = Math.random;	// y is the random function

// Stuff these functions into a JS object, because, why not!
var someObject = {
	'key1' : x,
	'key2' : y
};

console.log( someObject );

// ************************
// ok, this is where it gets interesting.

x(4);					// what did this do?

x('hi');				// what did this do?

x('---------------');	// what did this do?

someObject.key1('omg');	// what did this do?

x(someObject.key2());    // what did this do?
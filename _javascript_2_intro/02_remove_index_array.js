var someJSArray = [0, 1, 2, 3, 4, 5];


console.log('-------------');
console.log( someJSArray );
console.log('-------------');

// splice operates at position 2, removing 2 elements
someJSArray.splice(2, 2);


console.log('-------------');
console.log( someJSArray );
console.log('-------------');


// splice can also be used to insert at position 2, removing 0 items
someJSArray.splice(2, 0, 'oh, hello');

console.log('-------------');
console.log( someJSArray );
console.log('-------------');

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
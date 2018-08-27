// ************************
// String Splitting

var theBigString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// ************************
// By calling the split method on a period (.), it will split
// our original string into an array

arrOfSentences = theBigString.split('.');

console.log(arrOfSentences)
console.log('-------------');

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
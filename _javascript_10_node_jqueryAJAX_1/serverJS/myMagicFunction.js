function headsOrTails() {
    var x = getRandomInt(0, 2);
    var retval = 'tails';
    if (x===0) {
        retval = 'heads';
    }
    
    return retval;
}

// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports.headsOrTails = headsOrTails;
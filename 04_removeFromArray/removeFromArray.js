const removeFromArray = function(originalArray, ...remove) {
    arrayInput = Array.from(originalArray);
    var cleanArray = arrayInput.filter(goodValues => !remove.includes(goodValues));
    return cleanArray;
}

// Do not edit below this line
module.exports = removeFromArray;

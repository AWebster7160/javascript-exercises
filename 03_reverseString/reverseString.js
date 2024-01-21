const reverseString = function(string) {
    stringArray = string.split('');
    let reverseString = ''
    n = stringArray.length
    for (i = 0; i < n; i++) {
        reverseString += stringArray.pop();
        console.log(reverseString)
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (string) {
    array = string.split('');
    cleanArray = array.filter((letter) => {
        if (typeof letter === 'number' 
        || typeof letter === 'symbol' 
        || letter === ' ' 
        || letter === ',' 
        || letter === '!' 
        || letter === '.' 
        || letter === '?') {
            return false;
        } else {
            return true;
        }
});
cleanArray = cleanArray.map(letter => letter.toLowerCase());
reversed = cleanArray.toReversed();
console.log(reversed);
console.log(cleanArray);
for (i=0; i < cleanArray.length; i++) {
    if (cleanArray[i] != reversed[i]) {
        return false;
        } 
    }   
    return true;
};

// Do not edit below this line
module.exports = palindromes;

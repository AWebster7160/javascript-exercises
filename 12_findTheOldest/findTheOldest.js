const findTheOldest = function(array) {
    oldAge = array.sort((a, b) => {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1
        } else {
            return 1
        }
})
console.log(oldAge[0].name)
return (oldAge[0])}

// Do not edit below this line
module.exports = findTheOldest;

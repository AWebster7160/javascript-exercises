const findTheOldest = function(array) {
    year = new Date().getFullYear();
    array.forEach((person) => {
        if ('yearOfDeath' in person) {
            return person;
        } else {
            person.yearOfDeath = year;
            console.log(person);
            return person;
        }
    })
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

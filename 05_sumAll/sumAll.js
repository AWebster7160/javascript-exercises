const sumAll = function(num1, num2) {
    let sum = 0;
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return('ERROR');
    }
    else if (num1 < 0 || num2 < 0) {
        return ('ERROR');
    }
    else {
        start = Math.min(num1, num2);
        end = Math.max(num1, num2);
        console.log(end)
        for (i = start; i <= end; i++) {
            sum += i; 
            console.log(i);
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

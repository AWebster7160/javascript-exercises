const fibonacci = function(fib) {
    a = 0;
    b = 1;
    c = 1;
    if (+fib < 0){
        return 'OOPS';
    } else if (+fib == 0) {
        return 0;
    } else {
    for (i = 1; i < +fib; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }}
    return c;
}

// Do not edit below this line
module.exports = fibonacci;

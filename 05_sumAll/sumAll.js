const checkForPositive = function(num1, num2) {
    let arePositive = false;

    (num1 >= 0 && num2 >= 0)? arePositive = true: null;
    return arePositive;
};

const checkForInteger = function(num1, num2) {
    let areInteger = false;

    (Number.isInteger(num1) && Number.isInteger(num2))? areInteger = true: null;
    return areInteger;
}

const sumAll = function(num1, num2) {
    let sum = 0

    if (!checkForPositive(num1, num2) || !checkForInteger(num1, num2)) {
        return "ERROR"
    };

    const max = Math.max(num1, num2);
    const min = (num1 + num2) - max;

    for (let i = min; i <= max; i++) {
        sum += i
    }

    return sum



};

// Do not edit below this line
module.exports = sumAll;

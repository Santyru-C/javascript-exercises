const leapYears = function(year) {
    let isLeapYear = false;

    (year % 4 == 0 && year % 100 != 0) || year % 400 == 0? isLeapYear = true: null;
    return isLeapYear
};

// Do not edit below this line
module.exports = leapYears;

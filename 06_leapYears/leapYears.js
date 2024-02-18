const leapYears = function(year) {
    if (year % 4 == 0 && year % 400 == 0) {
        return true;
    } else if (year % 4 == 0 && year % 100 == 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

// solution ans is below
// return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

// let value = 1997;
// if (value % 4 == 0 && (value % 100 != 0 && value % 400 == 0)) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// if (value % 4 == 0 && value % 400 == 0) {
//     console.log("true");
// } else if (value % 4 == 0 && value % 100 == 0) {
//     console.log("false");
// } else if (value % 4 == 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// if ((value % 4 == 0 && value % 400 == 0) || value % 4 == 0) {
//     console.log("true");
// } else {
//     console.log("false");
// }


// Do not edit below this line
module.exports = leapYears;

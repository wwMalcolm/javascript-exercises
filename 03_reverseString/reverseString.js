const reverseString = function(stringParam) {
    const paramSplit = stringParam.split(""); // makes each string its own element in an array
    let newArray = [];

    for (let i = 0; i <= paramSplit.length - 1; i++) {
        newArray.unshift(paramSplit[i]); // adds each element in a First in Last Out method.
    } // means original first index becomes last after processing.

    return newArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

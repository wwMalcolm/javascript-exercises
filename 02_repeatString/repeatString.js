const repeatString = function(stringVal, repeatedNo) {
    let message = "";
    if (repeatedNo < 0) {
        return message = "ERROR";
    } else {
        for (let i = 0; i < repeatedNo; i++) {
            message += stringVal;
        }
        return message;
    }
    
};



// Do not edit below this line
module.exports = repeatString;

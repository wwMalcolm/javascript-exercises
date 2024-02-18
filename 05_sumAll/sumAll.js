const sumAll = function(startNum, endNum) {
    if (Number.isInteger(startNum) && Number.isInteger(endNum) && startNum > 0 && endNum > 0) {
        let total = 0;
        if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                total += i;
            }
            return total;
        }
        else {
            for (let i = endNum; i <= startNum; i++) {
                total += i;
            }
            return total;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;

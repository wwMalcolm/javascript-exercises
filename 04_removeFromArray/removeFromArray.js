const removeFromArray = function(arrayParam, ...removeParam) {
    // for (let i = 1; i < arguments.length; i++) {
    //     let index = arrayParam.indexOf(arguments[i]); // all i parameter
    //     arrayParam.splice(index, 1);
    // }

    // for (let j = 0; j < arrayParam.length; j++) {
    //     if (arrayParam[j] == removeParam) {
    //         arrayParam.splice(j, 1);
    //     }
    // }

    // for (let i = 0; i < removeParam.length; i++) {
    //     for (let j = 0; j < arrayParam.length; j++) {
    //         if (arrayParam[j] == removeParam[i]) {
    //             arrayParam.splice(j, 1);
    //         }
    //     }
    // }

    // for (removeValue of removeParam) {
    //     for (let i = 0; i < arrayParam.length; i++) {
    //         if (arrayParam[i] == removeValue) {
    //             arrayParam.splice(i, 1);
    //         }
    //     }
    // }

    for (let i = arrayParam.length - 1; i >= 0; i--) {
        for (removeValue of removeParam) {
            if (arrayParam[i] === removeValue) {
                arrayParam.splice(i, 1);
            }
        }
    }

    return arrayParam;
};


// let abcArray = [3, 1, 2, 3, 4, 5, 3, 6];
// let valuetoremove = 4;
// for (let i = 0; i < abcArray.length; i++) {
//     if (abcArray[i] == valuetoremove) {
//         abcArray.splice(i, 1);
//     }
// }
// console.log(abcArray);
// let index = abcArray.indexOf(valuetoremove);

// abcArray.splice(index, 1);
// console.log(abcArray);


// Do not edit below this line
module.exports = removeFromArray;

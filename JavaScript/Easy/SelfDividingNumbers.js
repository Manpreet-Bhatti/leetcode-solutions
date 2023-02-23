/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var isSelfDividing = function (num) {
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] == 0 || num % numStr[i] != 0) {
            return false;
        }
    }
    return true;
};

var selfDividingNumbers = function (left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
};
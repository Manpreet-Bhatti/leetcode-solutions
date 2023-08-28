/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    let totalSum = arr.reduce((a, b) => a + b, 0);

    if (totalSum % 3 !== 0) {
        return false;
    }

    let targetSum = totalSum / 3;
    let currentSum = 0;
    let count = 0;

    for (let num of arr) {
        currentSum += num;
        if (currentSum === targetSum) {
            count++;
            currentSum = 0;
        }
    }

    return count >= 3;
};

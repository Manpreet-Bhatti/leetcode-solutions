/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let n = 1;
    while (n * n <= num) {
        if (n * n === num) {
            return true;
        }
        n++;
    }
    return false;
};
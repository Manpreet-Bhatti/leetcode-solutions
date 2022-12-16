/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    var result = "";
    var isNegative = num < 0;
    num = Math.abs(num);
    while (num >= 7) {
        result = num % 7 + result;
        num = Math.floor(num / 7);
    }
    result = num + result;
    return isNegative ? "-" + result : result;
};
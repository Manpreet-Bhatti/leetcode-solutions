/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num === 0) return "0";
    let hex = "0123456789abcdef";
    let result = "";
    while (num && result.length < 8) {
        result = hex[num & 15] + result;
        num >>>= 4;
    }
    return result;
};
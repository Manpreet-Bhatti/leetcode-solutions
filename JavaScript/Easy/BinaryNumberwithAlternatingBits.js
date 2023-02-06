/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    var prevBit = n & 1;
    n = n >> 1;
    while (n > 0) {
        if (prevBit === (n & 1)) {
            return false;
        }
        prevBit = n & 1;
        n = n >> 1;
    }
    return true;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countOnes = function (n) {
    var count = 0;
    while (n > 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};

var countBits = function (n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(countOnes(i));
    }
    return result;
};
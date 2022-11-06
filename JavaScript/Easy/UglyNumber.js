/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    for (let i of [2, 3, 5]) {
        while (n && n % i === 0) {
            n /= i;
        }
    }
    return n === 1;
};

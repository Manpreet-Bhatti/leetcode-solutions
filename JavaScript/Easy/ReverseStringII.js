/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    if (k > s.length) return s.split("").reverse().join("");
    const broken = s.split("");
    for (var i = 0; i < s.length; i += 2 * k) {
        const reverse = broken.slice(i, i + k).reverse();
        broken.splice(i, k, ...reverse);
    }
    return broken.join("");
};
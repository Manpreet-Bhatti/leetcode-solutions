/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    const result = [];
    let prevC = -Infinity;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            prevC = i;
        }
        result[i] = i - prevC;
    }
    prevC = Infinity;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            prevC = i;
        }
        result[i] = Math.min(result[i], prevC - i);
    }
    return result;
};
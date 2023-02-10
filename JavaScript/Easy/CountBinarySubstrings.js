/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    var count = 0;
    var prev = 0;
    var curr = 1;
    for (var i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            curr++;
        } else {
            prev = curr;
            curr = 1;
        }
        if (prev >= curr) {
            count++;
        }
    }
    return count;
};
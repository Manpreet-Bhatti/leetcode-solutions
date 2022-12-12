/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    var result = "";
    var count = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] == "-") continue;
        if (count == k) {
            result = "-" + result;
            count = 0;
        }
        result = s[i].toUpperCase() + result;
        count++;
    }
    return result;
};
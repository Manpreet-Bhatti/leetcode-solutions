/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var count = function (num) {
    var count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
};

var readBinaryWatch = function (turnedOn) {
    var result = [];
    for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 60; j++) {
            if (count(i) + count(j) === turnedOn) {
                result.push(i + ":" + (j < 10 ? "0" + j : j));
            }
        }
    }
    return result;
};
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    var z = x ^ y;
    var count = 0;
    while (z > 0) {
        if (z % 2 == 1) {
            count++;
        }
        z = Math.floor(z / 2);
    }
    return count;
};
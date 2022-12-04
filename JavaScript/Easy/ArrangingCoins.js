/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let rows = 0;
    while (n > 0) {
        rows += 1;
        n -= rows;
    }
    if (n < 0) {
        return rows - 1;
    } else {
        return rows;
    }
};
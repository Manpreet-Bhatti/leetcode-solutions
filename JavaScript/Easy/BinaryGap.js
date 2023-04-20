/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let max = 0;
    let last = -1;
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            if (last >= 0) {
                max = Math.max(max, i - last);
            }
            last = i;
        }
    }
    return max;
};
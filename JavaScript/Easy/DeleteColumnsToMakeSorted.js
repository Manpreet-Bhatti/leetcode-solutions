/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const n = strs[0].length;
    let result = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] < strs[j - 1][i]) {
                result++;
                break;
            }
        }
    }

    return result;
};
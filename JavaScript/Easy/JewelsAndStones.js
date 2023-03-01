/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    const jewelsSet = new Set(jewels);
    let count = 0;
    for (const char of stones) {
        if (jewelsSet.has(char)) {
            count++;
        }
    }
    return count;
};
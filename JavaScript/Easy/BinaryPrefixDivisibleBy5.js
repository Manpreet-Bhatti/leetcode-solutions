/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (nums) {
    const result = [];
    let current = 0;

    for (const num of nums) {
        current = ((current << 1) + num) % 5;
        result.push(current === 0);
    }

    return result;
};

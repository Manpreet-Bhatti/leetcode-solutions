/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max = -Infinity, maxIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[i] * 2 > max) {
            return -1;
        }
    }
    return maxIndex;
};

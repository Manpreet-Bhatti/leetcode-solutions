/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let max = 1;
    let current = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            current++;
        } else {
            current = 1;
        }
        max = Math.max(max, current);
    }
    return max;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    let max = nums[0];
    let min = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
        if (nums[i] < min) min = nums[i];
    }

    const diff = max - min;
    if (diff <= 2 * k) return 0;
    return diff - 2 * k;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function (nums) {
    nums.sort(function (a, b) { return b - a });
    let set = new Set(nums);
    if (set.size < 3) {
        return [...set][0];
    } else {
        return [...set][2];
    }
};
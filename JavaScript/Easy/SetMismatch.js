/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let set = new Set();
    let duplicate = -1, missing = -1;
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            duplicate = nums[i];
        } else {
            set.add(nums[i]);
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            missing = i;
            break;
        }
    }
    return [duplicate, missing];
};

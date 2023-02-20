/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    const totalSum = nums.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};

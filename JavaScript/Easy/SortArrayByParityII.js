/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let oddIndex = 1;
    let evenIndex = 0;

    while (oddIndex < nums.length && evenIndex < nums.length) {
        if (nums[evenIndex] % 2 === 0) {
            evenIndex += 2;
        } else if (nums[oddIndex] % 2 !== 0) {
            oddIndex += 2;
        } else {
            swap(nums, oddIndex, evenIndex);
            oddIndex += 2;
            evenIndex += 2;
        }
    }

    return nums;
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

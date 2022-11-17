/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        this[i] = nums[i];
    }
    this.length = nums.length;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    let sum = 0;
    for (let i = left; i <= right; i++) {
        sum += this[i];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
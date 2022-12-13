/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    var max = 0;
    var current = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            current++;
        } else {
            if (current > max) {
                max = current;
            }
            current = 0;
        }
    }
    if (current > max) {
        max = current;
    }
    return max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var majEl = null;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (count == 0) {
      majEl = nums[i];
      count++;
    } else if (majEl == nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return majEl;
};

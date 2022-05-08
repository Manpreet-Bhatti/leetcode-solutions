/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  var remainingElements = 0;
  for (let i = nums.length; i--; ) {
    // If the element is equal to the value we want to remove, remove it
    if (nums[i] === val) nums.splice(i, 1);
    // Otherwise, increment the remaining elements counter
    else remainingElements++;
  }
  return remainingElements;
};

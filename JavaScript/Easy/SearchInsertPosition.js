/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

// Plan: Do a binary search on the array.
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // If the target is less than the mid, then the target should be in the
    // left half of the array.
    if (nums[mid] > target) right = mid - 1;
    // If the target is greater than the mid, then the target should be in the
    // right half of the array.
    else if (nums[mid] < target) left = mid + 1;
    else return mid;
  }
  // If the target is not found, then return the index where the target should
  // be inserted.
  return nums[mid] > target ? mid : mid + 1;
};

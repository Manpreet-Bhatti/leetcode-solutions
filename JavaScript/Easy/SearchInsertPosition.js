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
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

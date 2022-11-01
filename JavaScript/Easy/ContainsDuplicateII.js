/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let numsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numsMap.get(nums[i]) >= 0 && i - numsMap.get(nums[i]) <= k) return true;
    numsMap.set(nums[i], i);
  }
  return false;
};

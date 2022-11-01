/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const uniqueList = [...new Set(nums)];
  if (nums.length > uniqueList.length) return true;
  return false;
};

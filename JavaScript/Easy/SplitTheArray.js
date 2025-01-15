/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  const freq = {};
  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > 2) {
      return false;
    }
  }
  return true;
};

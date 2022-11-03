/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let result = [];
  let start = 0;
  let end = 0;
  let i = 0;
  while (i < nums.length) {
    start = nums[i];
    end = nums[i];
    while (nums[i + 1] === nums[i] + 1) {
      i++;
      end = nums[i];
    }
    if (start === end) {
      result.push(start.toString());
    } else {
      result.push(start.toString() + "->" + end.toString());
    }
    i++;
  }
  return result;
};

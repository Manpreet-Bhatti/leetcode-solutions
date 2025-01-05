/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
  const firstNum = nums[0];

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallest) {
      secondSmallest = smallest;
      smallest = nums[i];
    } else if (nums[i] < secondSmallest) {
      secondSmallest = nums[i];
    }
  }

  return firstNum + smallest + secondSmallest;
};

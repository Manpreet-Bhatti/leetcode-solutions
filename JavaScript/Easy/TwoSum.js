/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // Create a map of resultant numbers and their indices
  let numHold = {};
  // Loop through nums and find the difference between target and each number
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in numHold) {
      // If the difference is in the map, return the indices
      return [numHold[target - nums[i]], i];
    } else {
      // Else, add the number and its index to the map
      numHold[nums[i]] = i;
    }
  }
};

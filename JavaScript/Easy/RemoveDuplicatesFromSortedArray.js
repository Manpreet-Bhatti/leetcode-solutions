/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var removeDuplicates = function (nums) {
  var duplicateCounter = 0;
  for (let i = nums.length; i--; ) {
    // If i is equal to the length of the array - 1, then we know
    //  a duplicate was found
    if (i === nums.length - 1) duplicateCounter++;
    // If duplicate found, remove it
    else if (nums[i] === nums[i + 1]) nums.splice(i, 1);
    else duplicateCounter++;
  }
  return duplicateCounter;
};

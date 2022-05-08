/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  // Check to see if the number is negative
  const isNeg = x < 0;
  // If number is negative, we know it cannot be a palindrome
  if (isNeg) {
    return false;
  }
  const tempNum = x;
  let reverse = 0;
  while (x > 0) {
    // Multiply reversed number by 10 and add last digit of x to it
    reverse = reverse * 10 + (x % 10);
    // Remove last digit of x
    x = parseInt(x / 10);
  }
  // Check if reversed number is equal to original number
  return reverse == tempNum;
};

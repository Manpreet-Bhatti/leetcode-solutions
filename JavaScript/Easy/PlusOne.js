/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let sum = digits[digits.length - 1] + 1,
    carry = 0;
  if (sum > 9) {
    carry = 1;
    sum = sum - 10;
  }
  digits[digits.length - 1] = sum;
  for (let i = digits.length - 2; i >= 0; i--) {
    sum = digits[i] + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
    } else carry = 0;
    digits[i] = sum;
  }
  if (carry === 1) digits.unshift(1);
  return digits;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = 0;
  let num = n;
  while (num > 0) {
    sum += Math.pow(num % 10, 2);
    num = Math.floor(num / 10);
  }
  if (sum === 1) {
    return true;
  } else if (sum === 4) {
    return false;
  } else {
    return isHappy(sum);
  }
};

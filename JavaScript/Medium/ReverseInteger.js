/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let negNum = false;
  if (x < 0) {
    negNum = true;
    x = -x;
  }
  let reverse = 0;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (reverse >= Math.pow(2, 31) - 1 || reverse <= Math.pow(-2, 31)) {
    return 0;
  }
  return negNum ? -reverse : reverse;
};

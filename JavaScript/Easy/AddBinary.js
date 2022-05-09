/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  let sum = 0,
    carry = 0,
    result = "",
    i = a.length - 1,
    j = b.length - 1;
  while (i >= 0 || j >= 0) {
    sum = carry;
    if (i >= 0) {
      sum += parseInt(a[i]);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }
    carry = Math.floor(sum / 2);
    result = (sum % 2) + result;
  }
  if (carry > 0) result = carry + result;
  return result;
};

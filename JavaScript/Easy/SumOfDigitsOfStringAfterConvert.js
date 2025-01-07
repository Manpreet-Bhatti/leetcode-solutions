/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s.charCodeAt(i) - 96;
  }

  while (k--) {
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
      sum += +result[i];
    }
    result = String(sum);
  }

  return +result;
};

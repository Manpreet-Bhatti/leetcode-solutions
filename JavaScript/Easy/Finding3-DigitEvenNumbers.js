/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const result = new Set();

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (i === j || j === k || i === k) continue;

        const num = digits[i] * 100 + digits[j] * 10 + digits[k];

        if (num >= 100 && num % 2 === 0) {
          result.add(num);
        }
      }
    }
  }

  return Array.from(result).sort((a, b) => a - b);
};

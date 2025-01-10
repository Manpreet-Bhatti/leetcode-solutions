/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const ranks = new Map();
  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  sorted.forEach((num, i) => ranks.set(num, i + 1));
  return arr.map((num) => ranks.get(num));
};

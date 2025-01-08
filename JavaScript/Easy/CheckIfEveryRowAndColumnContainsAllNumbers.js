/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;
  const seen = new Set();

  for (let row = 0; row < n; row++) {
    seen.clear();
    for (let col = 0; col < n; col++) {
      const num = matrix[row][col];
      if (num < 1 || num > n || seen.has(num)) return false;
      seen.add(num);
    }
  }

  for (let col = 0; col < n; col++) {
    seen.clear();
    for (let row = 0; row < n; row++) {
      const num = matrix[row][col];
      if (num < 1 || num > n || seen.has(num)) return false;
      seen.add(num);
    }
  }

  return true;
};

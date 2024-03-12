/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const maxDist =
    Math.max(rCenter, rows - 1 - rCenter) +
    Math.max(cCenter, cols - 1 - cCenter);
  const buckets = Array.from({ length: maxDist + 1 }, () => []);

  // Group cells by their Manhattan distance to (rCenter, cCenter)
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const dist = Math.abs(i - rCenter) + Math.abs(j - cCenter);
      buckets[dist].push([i, j]);
    }
  }

  // Flatten the buckets into the result array
  return buckets.flat();
};

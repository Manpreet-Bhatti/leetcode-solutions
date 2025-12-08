/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  const squares = new Set();
  for (let i = 1; i <= n; i++) {
    squares.add(i * i);
  }

  let count = 0;

  for (let a = 1; a <= n; a++) {
    const aSquared = a * a;
    for (let b = 1; b <= n; b++) {
      if (squares.has(aSquared + b * b)) {
        count++;
      }
    }
  }

  return count;
};

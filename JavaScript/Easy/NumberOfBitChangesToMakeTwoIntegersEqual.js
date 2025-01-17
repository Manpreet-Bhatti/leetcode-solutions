/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
  if (n < k) return -1;

  let diff = n ^ k;

  if ((k & ~n) !== 0) return -1;

  let changes = 0;
  while (diff > 0) {
    changes += diff & 1;
    diff >>= 1;
  }

  return changes;
};

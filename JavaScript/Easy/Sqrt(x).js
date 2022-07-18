/**
 * @param {number} x
 * @return {number}
 */

// Implement binary search.
var mySqrt = function (x) {
  if (x < 2) return x; // Technically, numbers less than 2 don't have a square root.
  var left = 1;
  var right = x;
  var mid = 0;

  while (left <= right) {
    // Compute midpoint.
    mid = left + Math.floor((right - left) / 2);

    if (mid > x / mid) {
      right = mid - 1;
    } else if (mid + 1 > x / (mid + 1)) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
};

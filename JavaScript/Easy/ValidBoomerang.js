/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;

  // Calculate the area directly without checking for duplicate points
  return (x1 - x2) * (y1 - y3) !== (x1 - x3) * (y1 - y2);
};

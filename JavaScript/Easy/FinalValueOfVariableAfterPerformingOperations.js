/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    x += operations[i][1] === "+" ? 1 : -1;
  }
  return x;
};

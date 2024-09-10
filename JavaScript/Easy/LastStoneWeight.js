/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    // Sort the array in descending order
    stones.sort((a, b) => b - a);

    // Get the two heaviest stones
    const y = stones.shift();
    const x = stones.shift();

    // If they're not equal, put the remainder back
    if (y > x) {
      stones.push(y - x);
    }
  }

  // Return the last stone if there is one, or 0 if none left
  return stones.length === 1 ? stones[0] : 0;
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let prev1 = cost[0];
    let prev2 = cost[1];
    for (let i = 2; i < cost.length; i++) {
        let curr = Math.min(prev1, prev2) + cost[i];
        prev1 = prev2;
        prev2 = curr;
    }
    return Math.min(prev1, prev2);
};

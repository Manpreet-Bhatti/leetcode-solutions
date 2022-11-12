/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let sol = [];
    var backtrack = function (remaining, comb) {
        if (remaining.length === 0) {
            sol.push(comb.slice());
        } else {
            for (let i = 0; i < remaining.length; i++) {
                comb.push(remaining[i]);
                backtrack(remaining.slice(0, i).concat(remaining.slice(i + 1)), comb);
                comb.pop();
            }
        }
    }
    backtrack(nums, []);
    return sol;
};
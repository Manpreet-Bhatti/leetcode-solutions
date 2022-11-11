/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
    let sol = [];
    var backtrack = function (remaining, comb, next) {
        if (remaining === 0) {
            sol.push(comb.slice());
        } else {
            for (let i = next; i < n + 1; i++) {
                comb.push(i);
                backtrack(remaining - 1, comb, i + 1);
                comb.pop();
            }
        }
    }
    backtrack(k, [], 1);
    return sol;
};
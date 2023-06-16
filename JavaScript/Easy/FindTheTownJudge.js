/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let trustCounts = new Array(n + 1).fill(0);

    for (let i = 0; i < trust.length; i++) {
        trustCounts[trust[i][0]]--;
        trustCounts[trust[i][1]]++;
    }

    for (let i = 1; i < trustCounts.length; i++) {
        if (trustCounts[i] === n - 1) {
            return i;
        }
    }

    return -1;
};
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let sol = [];
    var backtrack = function (remaining, comb) {
        if (remaining.length === 0) {
            sol.push(comb);
        } else {
            if (remaining[0].match(/[a-zA-Z]/)) {
                backtrack(remaining.slice(1), comb + remaining[0].toLowerCase());
                backtrack(remaining.slice(1), comb + remaining[0].toUpperCase());
            } else {
                backtrack(remaining.slice(1), comb + remaining[0]);
            }
        }
    }
    backtrack(s, "");
    return sol;
};
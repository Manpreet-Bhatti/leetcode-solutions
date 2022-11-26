/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let map = {};
    for (let c of s) {
        map[c] ? map[c]++ : map[c] = 1;
    }
    for (let c of t) {
        if (!map[c]) return c;
        map[c]--;
    }
};
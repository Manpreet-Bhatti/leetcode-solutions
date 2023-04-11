/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    let diff = [];
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
        set.add(s[i]);
    }

    if (diff.length === 0) {
        return set.size < s.length;
    }

    if (diff.length !== 2) {
        return false;
    }

    return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};
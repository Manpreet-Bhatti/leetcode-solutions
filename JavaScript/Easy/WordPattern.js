/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let words = s.split(" ");
    if (words.length != pattern.length) return false;
    let map = new Map();
    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) != words[i]) return false;
        } else {
            if (Array.from(map.values()).includes(words[i])) return false;
            map.set(pattern[i], words[i]);
        }
    }
    return true;
};
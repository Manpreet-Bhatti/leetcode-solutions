/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word === word.toUpperCase()) return true;
    if (word === word.toLowerCase()) return true;
    if (word[0] === word[0].toUpperCase()) {
        let upper = true;
        for (let i = 1; i < word.length; i++) {
            if (word[i] === word[i].toUpperCase()) return false;
        }
        return upper;
    }
    return false;
};
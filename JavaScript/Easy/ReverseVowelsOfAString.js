/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var vowels = "aeiouAEIOU";
    let reverse = [];
    var result = [];
    var i = 0;
    for (let j of s) {
        if (vowels.indexOf(j) !== -1) {
            reverse.push(j)
        }
    }
    reverse.reverse();
    for (let j = 0; j < s.length; j++) {
        if (vowels.indexOf(s[j]) !== -1) {
            result.push(reverse[i])
            i++;
        } else {
            result.push(s[j])
        }
    }
    return result.join("");
};
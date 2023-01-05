/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return s;
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
    }
    return longest;
};
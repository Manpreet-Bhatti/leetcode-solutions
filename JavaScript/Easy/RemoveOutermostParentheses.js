/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let result = '';
    let count = 0;

    for (const char of s) {
        if (char === '(') {
            count++;
            if (count > 1) result += '(';
        } else {
            if (count > 1) result += ')';
            count--;
        }
    }

    return result;
};

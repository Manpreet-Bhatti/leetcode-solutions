/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    const result = [];
    let start = 0;
    let end = 0;
    let prevChar = s[0];

    for (let i = 1; i < s.length; i++) {
        const currentChar = s[i];
        if (prevChar === currentChar) {
            end = i;
        } else {
            if (end - start >= 2) {
                result.push([start, end]);
            }
            start = i;
            end = i;
        }
        prevChar = currentChar;
    }

    if (end - start >= 2) {
        result.push([start, end]);
    }

    return result;
};
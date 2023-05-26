/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    const n = s.length;
    const result = [];
    let i = 0;
    let d = n;

    for (let j = 0; j < n; j++) {
        if (s[j] === "I") {
            result.push(i);
            i++;
        } else {
            result.push(d);
            d--;
        }
    }

    result.push(i);

    return result;
};
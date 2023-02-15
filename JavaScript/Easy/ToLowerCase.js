/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    return s.toLowerCase();
};

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const diff = 'a'.charCodeAt(0) - A;
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);

        if (code >= A && code <= Z) {
            result += String.fromCharCode(code + diff);
        } else {
            result += s[i];
        }
    }

    return result;
};
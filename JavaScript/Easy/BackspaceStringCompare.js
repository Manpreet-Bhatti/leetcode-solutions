/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    var s1 = [];
    var t1 = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            s1.pop();
        } else {
            s1.push(s[i]);
        }
    }
    for (var i = 0; i < t.length; i++) {
        if (t[i] === '#') {
            t1.pop();
        } else {
            t1.push(t[i]);
        }
    }
    return s1.join('') === t1.join('');
};
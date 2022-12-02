/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let res = "";
    let rem = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (i >= 0 || j >= 0) {
        let sum = rem;
        if (i >= 0) {
            sum += parseInt(num1[i]);
            i--;
        }
        if (j >= 0) {
            sum += parseInt(num2[j]);
            j--;
        }
        res = sum % 10 + res;
        rem = Math.floor(sum / 10);
    }
    if (rem > 0) {
        res = rem + res;
    }
    return res;
};
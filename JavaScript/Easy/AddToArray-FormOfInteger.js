/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let carry = 0;
    let i = num.length - 1;

    while (i >= 0 || k > 0) {
        const n = i >= 0 ? num[i] : 0;
        const m = k > 0 ? k % 10 : 0;

        const sum = n + m + carry;
        carry = Math.floor(sum / 10);

        if (i >= 0) {
            num[i] = sum % 10;
        } else {
            num.unshift(sum % 10);
        }

        i--;
        k = Math.floor(k / 10);
    }

    if (carry > 0) {
        num.unshift(carry);
    }

    return num;
};

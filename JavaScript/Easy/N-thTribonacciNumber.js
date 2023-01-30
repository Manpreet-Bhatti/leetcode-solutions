/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let t_0 = 0, t_1 = 1, t_2 = 1;
    for (let i = 3; i <= n; i++) {
        let t_3 = t_0 + t_1 + t_2;
        t_0 = t_1;
        t_1 = t_2;
        t_2 = t_3;
    }
    return t_2;
};
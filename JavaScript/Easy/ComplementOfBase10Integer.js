/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    // Find the number that consists entirely of 1's and has the same number of bits as `n`
    let mask = 1;
    while (mask < n) {
        mask = (mask << 1) | 1;
    }

    // XOR `n` with `mask` to get the bitwise complement
    return n ^ mask;
};

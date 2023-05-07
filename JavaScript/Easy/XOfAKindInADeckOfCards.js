/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
var findGCD = function (a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    if (a === b) return a;
    if (a > b) return findGCD(a - b, b);
    return findGCD(a, b - a);
};

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    const map = new Map();
    for (let i = 0; i < deck.length; i++) {
        if (map.has(deck[i])) map.set(deck[i], map.get(deck[i]) + 1);
        else map.set(deck[i], 1);
    }

    const values = Array.from(map.values());
    let gcd = values[0];
    for (let i = 1; i < values.length; i++) {
        gcd = findGCD(gcd, values[i]);
        if (gcd < 2) return false;
    }

    return true;
};
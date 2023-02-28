/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var isPrime = function (n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

var getSetBits = function (n) {
    var count = 0;
    while (n > 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};

var countPrimeSetBits = function (left, right) {
    var count = 0;
    for (var i = left; i <= right; i++) {
        if (isPrime(getSetBits(i))) {
            count++;
        }
    }
    return count;
};
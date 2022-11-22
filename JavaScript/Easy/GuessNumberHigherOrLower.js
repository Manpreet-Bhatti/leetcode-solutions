/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let start = 1;
    let end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let result = guess(mid);
        if (result === 0) {
            return mid;
        } else if (result === -1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
};
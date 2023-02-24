/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let result = letters[0];
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            result = letters[i];
            break;
        }
    }
    return result;
};
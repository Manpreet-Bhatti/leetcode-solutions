/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    let letters = {};
    for (let i = 0; i < licensePlate.length; i++) {
        let c = licensePlate[i].toLowerCase();
        if (c >= 'a' && c <= 'z') {
            if (letters[c] === undefined) {
                letters[c] = 1;
            } else {
                letters[c]++;
            }
        }
    }
    let minWord = null;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let wordLetters = {};
        for (let j = 0; j < word.length; j++) {
            let c = word[j];
            if (wordLetters[c] === undefined) {
                wordLetters[c] = 1;
            } else {
                wordLetters[c]++;
            }
        }
        let isComplete = true;
        for (let c in letters) {
            if (wordLetters[c] === undefined || wordLetters[c] < letters[c]) {
                isComplete = false;
                break;
            }
        }
        if (isComplete) {
            if (minWord === null || word.length < minWord.length) {
                minWord = word;
            }
        }
    }
    return minWord;
};
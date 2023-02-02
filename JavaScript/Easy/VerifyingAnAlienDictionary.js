/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let orderMap = {};
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        let j = 0;
        let len = Math.min(word1.length, word2.length);
        while (j < len) {
            if (orderMap[word1[j]] < orderMap[word2[j]]) {
                break;
            } else if (orderMap[word1[j]] > orderMap[word2[j]]) {
                return false;
            }
            j++;
        }
        if (j === len && word1.length > word2.length) {
            return false;
        }
    }
    return true;
};

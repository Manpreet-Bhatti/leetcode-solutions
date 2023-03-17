/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const bannedWords = new Set(banned);
    const wordCount = {};
    let max = 0;
    let maxWord = '';

    for (const word of paragraph.toLowerCase().split(/\W+/)) {
        if (!bannedWords.has(word)) {
            wordCount[word] = (wordCount[word] ?? 0) + 1;
            if (wordCount[word] > max) {
                max = wordCount[word];
                maxWord = word;
            }
        }
    }

    return maxWord;
};

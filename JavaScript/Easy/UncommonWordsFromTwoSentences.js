/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = (s1, s2) => {
    const wordCounts = new Map();

    for (const word of (s1 + ' ' + s2).split(' ')) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    }

    return Array.from(wordCounts.entries())
        .filter(([_, count]) => count === 1)
        .map(([word, _]) => word);
};

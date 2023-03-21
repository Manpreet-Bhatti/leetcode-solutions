/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const deconstructed = sentence.split(" ");

    return deconstructed.map((word, idx) => {
        const addA = 'a'.repeat(idx + 1);
        const firstChar = word[0];

        if (vowels.has(firstChar.toLowerCase())) {
            return word + 'ma' + addA;
        } else {
            return word.slice(1) + firstChar + 'ma' + addA;
        }
    }).join(" ");
};
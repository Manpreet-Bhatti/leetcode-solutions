/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const morseCodes = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
        "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--",
        "-..-", "-.--", "--.."]
    const alphToMorse = (char) => morseCodes[char.charCodeAt(0) - 97];
    let morseStrings = new Set();
    for (const word of words) {
        let str = ""
        for (const char of word) {
            str += alphToMorse(char)
        }
        morseStrings.add(str)
    }
    return morseStrings.size;
};
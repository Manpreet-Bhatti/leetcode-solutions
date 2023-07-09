/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let result = [];
    let firstWord = words[0];
    for (let i = 0; i < firstWord.length; i++) {
        let char = firstWord.charAt(i);
        let isCommon = true;
        for (let j = 1; j < words.length; j++) {
            if (!words[j].includes(char)) {
                isCommon = false;
                break;
            }
        }
        if (isCommon) {
            result.push(char);
            for (let j = 1; j < words.length; j++) {
                words[j] = words[j].replace(char, '');
            }
        }
    }
    return result;
};
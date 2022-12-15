/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let result = [];
    let row1 = 'qwertyuiop';
    let row2 = 'asdfghjkl';
    let row3 = 'zxcvbnm';
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        let row = 0;
        if (row1.indexOf(word[0]) !== -1) row = 1;
        else if (row2.indexOf(word[0]) !== -1) row = 2;
        else if (row3.indexOf(word[0]) !== -1) row = 3;
        let j = 1;
        while (j < word.length) {
            if (row === 1 && row1.indexOf(word[j]) === -1) break;
            if (row === 2 && row2.indexOf(word[j]) === -1) break;
            if (row === 3 && row3.indexOf(word[j]) === -1) break;
            j++;
        }
        if (j === word.length) result.push(words[i]);
    }
    return result;
};
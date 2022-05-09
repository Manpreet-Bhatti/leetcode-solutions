/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  // Remove leading and trailing spaces. Then split the string into an array.
  let words = s.trim().split(" ");
  // Find the last word in the array.
  let lastWord = words[words.length - 1];
  return lastWord.length;
};

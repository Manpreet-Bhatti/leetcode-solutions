/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  return needle ? haystack.indexOf(needle) : 0;
};

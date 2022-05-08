/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  // Using the indexOf method, we can find the index of the first occurrence of
  // the needle in the haystack, or return 0 if needle is empty
  return needle ? haystack.indexOf(needle) : 0;
};

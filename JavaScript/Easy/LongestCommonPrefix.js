/**
 * @param {string[]} strs
 * @return {string}
 */

// Plan: do a vertical scan of the string array.
var longestCommonPrefix = function (strs) {
  let pref = "";
  // If there are no strings, return an empty string
  if (strs.length === 0) return pref;
  for (let curr = 0; curr < strs[0].length; curr++) {
    // Go through each character in the first string
    const char = strs[0][curr];
    for (let next = 1; next < strs.length; next++) {
      // If the character is not the same as the next string, return the prefix
      if (strs[next][curr] !== char) return pref;
    }
    pref = pref + char;
  }
  return pref;
};

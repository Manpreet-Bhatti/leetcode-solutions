/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let brokenS = s.split(" ");
  for (e in brokenS) {
    brokenS[e] = brokenS[e].split("").reverse().join("");
  }
  return brokenS.join(" ");
};

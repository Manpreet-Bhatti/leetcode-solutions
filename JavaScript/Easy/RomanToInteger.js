/**
 * @param {string} s
 * @return {number}
 */

/** Plan for this problem: go through each character in the string, and add it
 * to a dummy integer. If the current integer is smaller than the next,
 * subtract it from resulant. For example: if given IV, we'd do reultant - 1
 *  + 5. This will return 4, being the correct answer. Otherwise, add to
 * resultant. For example: given VI, we'd do resultant + 5 + 1. */
var romanToInt = function (s) {
  // Create hashmap of roman numerals and their values
  const romInt = new Map();
  romInt
    .set("I", 1)
    .set("V", 5)
    .set("X", 10)
    .set("L", 50)
    .set("C", 100)
    .set("D", 500)
    .set("M", 1000);
  // Resultant integer
  var res = 0;
  const chars = s.split("");
  for (let i = 0; i + 1 < chars.length; i++) {
    if (romInt.get(chars[i]) >= romInt.get(chars[i + 1])) {
      /** Add to resulant if current character is greater than or equal to next
       * character */
      res += romInt.get(chars[i]);
    } else {
      /** Subtract from resulant if current character is less than next
       * character */
      res -= romInt.get(chars[i]);
    }
  }
  // Add last character to resulant
  res += romInt.get(chars[chars.length - 1]);
  return res;
};

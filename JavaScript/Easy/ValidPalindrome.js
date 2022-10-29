/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  var i = 0;
  var j = s.length - 1;
  var regex = /^[a-z0-9]+$/i;
  while (i < j) {
    while (i < j && !regex.test(s[i])) {
      i++;
    }
    while (i < j && !regex.test(s[j])) {
      j--;
    }
    if (i < j && s[i].toLowerCase() != s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

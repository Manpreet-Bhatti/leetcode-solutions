/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const openers = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const closers = new Set([")", "}", "]"]);

  for (let i = 0; i < s.length; i++) {
    if (openers[s[i]]) {
      stack.push(s[i]);
    } else if (closers.has(s[i])) {
      if (s[i] !== openers[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

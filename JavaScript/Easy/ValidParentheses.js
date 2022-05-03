/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      // Add to stack if there's an opening parenthesis
      stack.push(s[i]);
    }
    // If no opening parentheses, return false
    if (stack.length === 0) {
      return false;
    }
    let match;
    // If closing parenthesis, check if it matches the last opening parenthesis
    switch (s[i]) {
      case ")":
        match = stack.pop();
        if (match == "{" || match == "[") return false;
        break;
      case "}":
        match = stack.pop();
        if (match == "(" || match == "[") return false;
        break;
      case "]":
        match = stack.pop();
        if (match == "(" || match == "{") return false;
        break;
    }
  }
  // Check to see if there are no parentheses
  return stack.length === 0;
};

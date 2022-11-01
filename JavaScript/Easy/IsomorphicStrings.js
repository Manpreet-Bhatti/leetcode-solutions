/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let sMap = new Map(),
    tMap = new Map();
  for (var i = 0; i < s.length; i++) {
    if (!sMap.has(s[i])) {
      sMap.set(s[i], t[i]);
    } else if (sMap.get(s[i]) !== t[i]) {
      return false;
    }
    if (!tMap.has(t[i])) {
      tMap.set(t[i], s[i]);
    } else if (tMap.get(t[i]) !== s[i]) {
      return false;
    }
  }
  return true;
};

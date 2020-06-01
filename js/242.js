/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  var smap = getMapCount(s);
  var tmap = getMapCount(t);
  for (let i in smap) {
    if (smap[i] !== tmap[i]) {
      return false;
    }
  }
  return true;
};

var getMapCount = function (s) {
  var map = {};
  for (let i = 0; i < s.length; i++) {
    var char = s[i];
    if (map[char] === undefined) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }
  return map;
};

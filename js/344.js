/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 翻转字符串,in-place
var reverseString = function (s) {
  if (s.length <= 1) {
    return;
  }
  for (let i = 0; i < s.length / 2; i++) {
    var right = s.length - 1 - i;
    var temp = s[right];
    s[right] = s[i];
    s[i] = temp;
  }
};
var s = ['a', 'b', 'c', 'd', 'e'];
reverseString(s);
console.log(s);

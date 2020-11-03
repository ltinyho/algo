/**
 * @param {string} s
 * @return {string}
 */
// 翻转字符串 按单词翻转,去除多余的空格
// 输入："  hello world!  "
// 输出："world! hello"
// 解释：输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
var reverseWords = function (s) {
  var end = s.length;
  var res = '';
  var first = true;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (i + 1 !== end) { // world!前面的空格
        if (first === false) {
          res += ' ';
        }
        first = false;
        res += s.substring(i + 1, end);
      }
      end = i;
      continue;
    }
  }
  if(end!==0){
    if(first === false){
      res += ' ';
    }
    res += s.substring(0, end);
  }
  return res;
};

var res = reverseWords('  hello world!  ');
console.log('---' + res + '---');
var res1 = reverseWords('the sky is blue');
console.log('---' + res1 + '---');
var res2 = reverseWords(' a the sky is blue ');
console.log('---' + res2 + '---');
var res3 = reverseWords('EPY2giL');
console.log('---' + res3 + '---');
module.exports = {
  reverseWords,
};

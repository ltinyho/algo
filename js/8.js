/**
 * @param {string} s
 * @return {number}
 */
// 示例 1:
//
// 输入: "42"
// 输出: 42
// 示例 2:
//
// 输入: "   -42"
// 输出: -42
// 解释: 第一个非空白字符为 '-', 它是一个负号。
//      我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
// 示例 3:
//
// 输入: "4193 with words"
// 输出: 4193
// 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
// 示例 4:
//
// 输入: "words and 987"
// 输出: 0
// 解释: 第一个非空字符是 'w', 但它不是数字或正、负号。
//      因此无法执行有效的转换。
// 示例 5:
//
// 输入: "-91283472332"
// 输出: -2147483648
// 解释: 数字 "-91283472332" 超过 32 位有符号整数范围。
//      因此返回 INT_MIN (−231) 。
//
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/string-to-integer-atoi
//   著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var myAtoi = function (s) {
  var i = 0;
  var first = false;
  var res = '';
  while (i < s.length) {
    if (s[i] !== ' ') {
      if (isNumOrChar(s[i])) {
        if (first === false) {
          first = true;
        } else {
          if (s[i] === '-') {
            break;
          }
        }
        res += s[i];
      } else {
        if (first === false) {// 第一个字符为非数字
          return 0;
        } else { // 后续字符为非数字
          break;
        }
      }
      if (first === false) {
        first = true;
      }
      i++;
    } else {
      i++;
      if (first === true) {
        break;
      }
      continue;
    }
  }
  if (res.length === 0) {
    return 0;
  }
  res = +res;
  console.log(res);
  if (-91283472332 < -2147483648) {
    return -2147483648;
  }
  if (res > 2147483647) {
    return 2147483647;
  }
  return +res;
};

var isNumOrChar = function (s) {
  return isNums(s) || s === '-';
};
var isNums = function (s) {
  var num = s.charCodeAt(0);
  return num >= 48 && num <= 57;
};

var n1 = myAtoi('12324');
console.log(n1);
var n2 = myAtoi('-12324');
console.log(n2);
var n3 = myAtoi('-123 a24');
console.log(n3);
var n4 = myAtoi('-123-24');
console.log(n4);
var n5 = myAtoi('   -123   24');
console.log(n5);
var n6 = myAtoi('   214748364799');
console.log(n6);
var n7 = myAtoi('   -91283472332');
console.log(n6);

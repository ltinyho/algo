/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // dp[i][j] 状态为 word1 前i个字符与 word2前j字符相同需要的步数
  // 那么dp[i-1][j]表示 word1 删除一个字符与word2相同
  // 那么dp[i][j-1]表示 word1 增加一个字符与word2相同
  // 那么dp[i-1][j-1]表示 word1 替换一个字符与word2相同
  if (word1 === '') {
    return word2.length;
  }
  if (word2 === '') {
    return word1.length;
  }
  var dp = [];
  //  初始化
  for (let i = 0; i < word1.length + 1; i++) {
    dp[i] = new Array(word2.length + 1);
  }
  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};

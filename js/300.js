/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums == null || nums.length === 0) {
    return 0;
  }
  var res = 1;
  var dp = new Array(nums.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = 1;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
};

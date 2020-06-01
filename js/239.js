/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums === undefined || nums.length === 0) {
    return [];
  }
  var window = [], res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i >= k && i - k >= window[0]) {
      window.shift();
    }
    while (window.length && nums[window[window.length - 1]] <= nums[i]) {
      window.pop();
    }
    window.push(i);
    if (i >= k - 1) {
      res.push(nums[window[0]]);
    }
  }
  return res;
};

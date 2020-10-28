/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序取中间数
var majorityElement = function (nums) {
  nums.sort((x, y) => x - y);
  return nums[Math.floor((nums.length - 1) / 2)];
};

// 借助map统计元素个数
var majorityElement = function (nums) {
  var count = {};
  var res = null;
  for (let i = 0; i < nums.length; i++) {
    var item = nums[i];

    if (count[item] > 0) {
      count[item]++;
    } else {
      count[item] = 1;
    }
    if (count[item] >= nums.length / 2) {
      res = item;
      break;
    }
  }
  return res;
};

// 不借助额外的空间,使用原数组记录
var majorityElement = function (nums) {
  var res = nums[0];
  var count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {// 减为0代表重新计数
      res = nums[i];
      count++;
    } else if (res === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return res;
};

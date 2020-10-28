/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  var res = [];
  nums.sort((x, y) => x - y);// 关键排序,有序数组用来判断重复元素,左右指针逼近
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    var l = i + 1;
    var r = nums.length - 1;
    var target = 0 - nums[i];
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // 跳过跟上次重复的元素
      while (l < r) {
        if (nums[l] + nums[r] === target) {
          res.push([nums[i], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) {// 跳过跟前一个元素重复的元素
            l++;
          }
          while (l < r && nums[r] === nums[r - 1]) {// 跳过跟后一个元素重复的元素
            r--;
          }
          l++;
          r--;
        } else if (nums[l] + nums[r] < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  return res;
};


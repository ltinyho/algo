/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 暴力求解
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  var res = [];
  nums.sort((x, y) => x - y);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 1 && nums[i] === nums[i - 1]) {
      continue;
    }
    var left = i + 1;
    var right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < k && nums[left] === nums[left - 1]) {
          left++;
        }
        while (right < k && nums[right] === nums[right - 1]) {
          right--;
        }
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};


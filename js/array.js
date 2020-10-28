function MyArray(len) {
  this.data = [];
  this.len = len;
  this.add = function (val) {
    if (this.data.length >= this.len) {
      return;
    }
    if (this.data.length === 0) {
      this.data[0] = val;
      return;
    }
    var left = 0;
    var right = this.data.length - 1;
    while (left <= right) {
      var mid = Math.floor((left + right) / 2);
      console.log('mid', mid);
      if (this.data[mid] > val) {
        right = mid - 1;
      } else if (this.data[mid] < val) {
        left = mid + 1;
      } else {
        left = mid;
        break;
      }
    }
    for (let i = this.data.length; i > left; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[left] = val;
  };
  this.delete = function (idx) {
    this.data[idx] = null;
  };
  this.update = function (idx, val) {
    this.data[idx] = val;
  };
  this.console = function (idx, val) {
    console.log(this.data);
  };
}

// 方法一: 数组扩容合并之后在排序
// 方案二: 数组扩容,二分插入
/**
 *
 * @param {Array} arr1 Array
 * @param {Array} arr2 Array
 */
function mergeArray1(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1.sort((x, y) => x - y);
}

/**
 *
 * @param {Array} nums1 Array
 * @param {Array} nums2 Array
 */
function mergeArray(nums1, nums2) {
  var m = nums1.length;
  var n = nums2.length;
  while (n > 0) {
    if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[m + n - 1] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
}

module.exports = {
  MyArray,
  mergeArray,
};

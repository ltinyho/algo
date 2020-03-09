// 选择排序,遍历数组,每次选择当前待排序中最小的元素交换到最前面
function selectSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

// 插入排序,跟整理牌一样,每次插入时判断插入的位置,从后面插入,小于则交换位置,左侧一直有序,遍历到结尾自然全部有序
// [7,2,5,1] [7] [2,5,1] => [2,7] [5,1]
// [2,7,5,1] [2,7] [5,1] => [2,5,7] [1]
// [2,5,7,1]
// [1,2,5,7]
function insertSort(arr) {
  // console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        // console.log(arr,i);
      }
    }
  }
  return arr
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function isSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}


function calTime(func){
  var begin =  Date.now()
  func()
  var end =  Date.now()
  return end-begin
}

module.exports = {
  selectSort,
  isSort,
  insertSort,
  calTime
};

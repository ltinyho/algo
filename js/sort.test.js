const {
  selectSort,
  insertSort,
  bubbleSort,
  findKthLargest,
  mergeSort,
  quickSort,
  isSort,
  calTime,
} = require('./sort');

function random(n, min, max) {
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return arr;
}

function print(arr) {
  var sorted = isSort(arr);
  if (sorted === true) {
    console.log('排序:%o arr:%s', isSort(arr), arr);
  } else {
    console.log('排序:%o arr:%s', isSort(arr), arr);
  }
}

it('选择排序', function () {
  var init = random(100, 1, 2);
  var arr = selectSort(init);
  mergeSort;
  print(arr);
});
it('归并排序', function () {
  var init = random(100, 1, 1000);
  var arr = mergeSort(init);
  print(arr);
});

it('冒泡排序', function () {
  var init = random(100, 1, 1000);
  var arr = bubbleSort(init);
  print(arr);
});

it('插入排序', function () {
  var init = random(100, 1, 2);
  init = [7, 2, 5, 1];
  var arr = insertSort(init);
  print(arr);
});

it('快速排序', function () {
  var init = random(100, 1, 10000);
  var arr = quickSort(init);
  print(arr);
});

it('比较时间', function () {
  calTimes(4, insertSort, selectSort);
});

it('选择第 N 大的元素', function () {
  var init = random(100, 1, 10000);
  init = [7, 2, 5, 1,10,123,12];
  var ele = findKthLargest(init, 2);
  console.log(ele);
});

function calTimes(n, sort1, sort2) {
  var init = random(Math.pow(10, n), 1, 100000);
  var arr = insertSort(init);
  var sort1T = calTime(function () {
    sort1([...arr]);
  });
  var sort2T = calTime(function () {
    sort2([...arr]);
  });
  console.log('sort1: %s,sort2: %s, times: %s', sort1T, sort2T, sort1T / sort2T);
}

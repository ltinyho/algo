function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    var cur = arr[i];
    var min = i;
    for (let j = i; j > 0; j--) {
      if (cur < arr[j - 1]) {
        arr[j] = arr[j - 1];
        min = j - 1;
      } else {
        break;
      }
    }
    arr[min] = cur;
  }
  return arr;
}

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

function mergeSort(arr) {
  return mergeSortHelper(arr, 0, arr.length - 1);
}

function mergeSortHelper(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var mid = Math.floor(arr.length / 2);
  return merge(mergeSortHelper(arr.slice(0, mid)), mergeSortHelper(arr.slice(mid, arr.length)));
}

function merge(left, right) {
  var m = left.length - 1;
  var n = right.length - 1;

  while (n > 0) {
    if (m > 0 && left[m] > right[n]) {
      left[m + n - 1] = left[m];
      m--;
    } else {
      left[m + n - 1] = left[n];
      n--;
    }
  }
  return left;
}

function quickSort(arr) {
  quickSortHelp(arr, 0, arr.length - 1);
  return arr;
}

function partition(arr, l, r) {
  var i = l;
  var pivot = arr[r];
  for (let j = i; j < r; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, r);
  return i;
}

function quickSortHelp(arr, l, r) {
  if (l >= r) {
    return;
  }
  var pivot = partition(arr, l, r);
  quickSortHelp(arr, l, pivot - 1);
  quickSortHelp(arr, pivot + 1, r);
}

// 查找第N大的元素
function findKthLargest(arr, n) {
  return selectHelper(arr, 0, arr.length - 1, arr.length - n);
}

function selectPartition(arr, l, r) {
  var i = l;
  var pivot = arr[r];

  for (let j = l; j < r; j++) {
    if (arr[j] < pivot) {
      swap(arr, j, i);
      i++;
    }
  }
  swap(arr, i, r);
  return i;
}

function selectHelper(arr, l, r, n) {
  var pivot = selectPartition(arr, l, r);
  if ((pivot + 1) === n) {
    return arr[n];
  } else if ((pivot + 1) < n) {
    return selectHelper(arr, pivot + 1, r, n);
  } else {
    return selectHelper(arr, l, pivot - 1, n);
  }
}

function findInSort(arr, val) {
  var l = 0;
  var r = arr.length;
  while (l <= r) {
    var mid = Math.floor((l + r) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
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

function calTime(func) {
  var begin = Date.now();
  func();
  var end = Date.now();
  return end - begin;
}

module.exports = {
  selectSort,
  bubbleSort,
  isSort,
  insertSort,
  mergeSort,
  findKthLargest,
  findInSort,
  calTime,
};

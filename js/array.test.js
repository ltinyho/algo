const {
  MyArray,
  mergeArray,
} = require('./array');

it('固定长度有序数组', function () {
  var arr = new MyArray(10);
  arr.add(1);
  arr.add(1999);
  arr.add(545);
  arr.add(321);
  arr.add(54125);
  arr.add(541245);
  arr.add(545);
  arr.add(54555);
  arr.add(54115);
  arr.add(12);
  arr.console();
});

it('有序数组合并', function () {
  var data= mergeArray([1, 2, 3, 4], [3, 4, 5, 6, 7]);
  console.log(data);
});

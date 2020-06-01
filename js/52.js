/**
 * @param {number} n
 * @return {number}
 */

var totalNQueens = function (n) {
  if (n < 1) {
    return 0;
  }
  var count = 0;
  DFS(n, 0, 0, 0, 0);
  var DFS = function (n, row, cols, pie, na) {
    if (row >= n) {
      count += 1;
      return;
    }
    var bits = (~(cols | pie | na)) & ((1 << n) - 1);
    while (bits) {
      var p = bits & -bits;
      DFS(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1);
      bits = bits & (bits - 1);
    }
  };
  DFS(n, 0, 0, 0, 0);
  return count;
};

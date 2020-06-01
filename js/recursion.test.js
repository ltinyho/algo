function factorial(n) {
  if (n === 1) return 1;
  console.log('n*n-1=%s*%s', n, n - 1);
  return n * factorial(n - 1);
}

function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  var pow = 1;
  while (n) {
    if (n & 1) {
      pow *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return pow;
};
// map 存count
var majorityElement = function (nums) {
  var map = {};
  for (let i = 0; i < nums.length; i++) {
    var item = nums[i];
    console.log(item, map[item]);
    if (map[item] === undefined) {
      map[item] = 1;
    } else {
      map[item] += 1;
    }
    if (map[item] > nums.length / 2) {
      return item;
    }
  }
  return -1;
};
it('should ', function () {
  var a = myPow(2, -10);
  console.log(a);
  var b = majorityElement([1, 2, 3, 2, 2]);
  console.log(b);
});
/**
 * @param {number} n
 * @return {string[][]}
 */
var result = [];
var cols = pie = na = [];
var count = 0;
var solveNQueens = function (n) {
  if (n < 1) {
    return [];
  }
  DFS(n, 0, []);
  console.log(result, count);
  return;
};
var DFS = function (n, row, curState) {
  if (row >= n) {
    result.push(curState);
    return;
  }
  for (let col = 0; col < n; col++) {
    if (cols.includes(col) || pie.includes(row + col) || na.includes(row - col)) {
      count++;
      continue;
    }
    cols.push(col);
    pie.push(row + col);
    na.push(row - col);

    DFS(n, row + 1, curState.concat(col));

    cols.splice(cols.indexOf((col)), 1);
    pie.splice(pie.indexOf((row + col)), 1);
    na.splice(na.indexOf((row - col)), 1);
  }
};
var generate = function (result) {

};
it('should n', function () {
  solveNQueens(4);
});
it('should sodu', function () {
  var res = isValidSudoku([['5', '3', '.', '.', '7', '.', '.', '.', '.'], ['6', '.', '.', '1', '9', '5', '.', '.', '.'], ['.', '9', '8', '.', '.', '.', '.', '6', '.'], ['8', '.', '.', '.', '6', '.', '.', '.', '3'], ['4', '.', '.', '8', '.', '3', '.', '.', '1'], ['7', '.', '.', '.', '2', '.', '.', '.', '6'], ['.', '6', '.', '.', '.', '.', '2', '8', '.'], ['.', '.', '.', '4', '1', '9', '.', '.', '5'], ['.', '.', '.', '.', '8', '.', '.', '7', '9']]);
  console.log(res);
});
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (board == null || board.length === 0) {
    return false;
  }
  return solve(board);
};

var solve = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') {
        for (let c = '1'.charCodeAt(); c <= '9'.charCodeAt(); c++) {
          var ch = String.fromCharCode(c);
          if (isValid(board, i, j, ch)) {
            board[i][j] = ch;
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = '.';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
};

var isValid = function (board, row, col, c) {
  var f = Math.floor;
  for (let i = 0; i < 9; i++) {
    if (board[i][col] !== '.' && board[i][col] === c) {
      return false;
    }
    if (board[row][i] !== '.' && board[row][i] === c) {
      return false;
    }
    var block = board[3 * f(row / 3) + f(i / 3)][3 * f(col / 3) + i % 3];
    if (block !== '.' && block === c) {
      return false;
    }
  }
  return true;
};

var hasCycle = function (head) {
  var visited = new Set();
  var cur = head;
  while (cur) {
    if (visited.has(cur)) {
      return false;
    }
    visited.add(cur);
    cur = cur.next;
  }
  return true;
};
it('should hasCycle', function () {
  hasCycle();
});

var levelOrder2 = function (root) {
  if (root == null) {
    return [];
  }
  var queue = [];
  var res = [];
  queue.push(root);
  while (queue.length) {
    var temp = [];
    var level = [];
    for (let i = 0; i < queue.length; i++) {
      var node = queue[i];
      level.push(node.val);
      if (node.left) {
        temp.push(node.left);
      }
      if (node.right) {
        temp.push(node.right);
      }
    }
    queue = temp;
    res.push(level);
  }
  return res;
};

var levelOrder = function (root) {
  var res = [];
  levelOrderInt(root, 0, res);
  return res
};

var levelOrderInt = function (root, level, res) {
  if (root == null) {
    return [];
  }
  if (!res[level]) {
    res[level] = [];
  }
  res[level].push(root.val);
  if (root.left) {
    levelOrder(root.left, level + 1, res);
  }
  if (root.right) {
    levelOrder(root.right, level + 1, res);
  }
};

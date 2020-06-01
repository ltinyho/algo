/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function (root) {
  var res = [];
  preorder(root, res);
  return res;
};

function preorder(node, result) {
  if (node === null) {
    return;
  }
  result.push(node.val);
  preorder(node.left, result);
  preorder(node.right, result);
}

// 非递归写法
var preorderTraversal2 = function (root) {
  var res = [];
  var rights = [];
  var node = root;
  while (node) {
    res.push(node.val);
    if (node.right !== null) {
      rights.push(node.right);
    }
    node = node.left;
    if (node === null && rights.length > 0) {
      node = rights.shift();
    }
  }
  return res;
};
// 非递归写法,巧妙的利用 stack,每次先push right,再push left,弹出的时候只弹出一个
var preorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  var stack = [root];
  var res = [];
  while (stack.length > 0) {
    const { val, left, right } = stack.pop();
    res.push(val);
    if (right) {
      stack.push(ht);
    }
    if (left) {
      stack.push(left);
    }
  }
  return res;
};

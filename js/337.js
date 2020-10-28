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
 * @return {number}
 */
var rob1 = function (root) {
  if (!root) {
    return 0;
  }
  var val = 0;
  if (root.left) {
    val += rob(root.left.left) + rob(root.left.right);
  }
  if (root.right) {
    val += rob(root.right.left) + rob(root.right.right);
  }

  return Math.max(val + root.val, rob(root.left) + rob(root.right));
};

var rob = function (root) {
  if (!root) {
    return 0;
  }
  return robSub(root, {});
};
// 优化版,使用map存计算结果
var robSub = function (root, cache) {
  if (!root) {
    return 0;
  }
  var val = 0;
  if (root.left) {
    val += robSub(root.left.left, cache) + robSub(root.left.right, cache);
  }
  if (root.right) {
    val += robSub(root.right.left, cache) + robSub(root.right.right, cache);
  }
  var res = Math.max(
    val + root.val,
    robSub(root.left, cache) + robSub(root.right, cache)
  );
  cache[root] = res;
  return res;
};

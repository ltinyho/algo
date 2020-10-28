/**
 * 后序遍历
 * **/

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
var postorderTraversal1 = function (root) {
  if (!root) {
    return [];
  }
  var res = [];
  postorder(root, res);
  return res;
};

var postorder = function (root, res) {
  if (!root) {
    return;
  }
  postorder(root.left, res);
  postorder(root.right, res);
  res.push(root.val);
};

// 跟前序遍历相似,只是把 node.val从前入队,node.right 优先入栈
//
var postorderTraversal = function (root) {
  var res = [];
  var stack = [];
  var node = root;
  while (stack.length > 0 || node != null) {
    if (node != null) {
      stack.push(node);
      res.unshift(node.val);
      node = node.right;
    } else {
      var p = stack.pop();
      node = p.left;
    }
  }
  return res;
};

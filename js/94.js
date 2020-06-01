/**
 * 中序遍历
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
var inorderTraversal1 = function(root) {
    var res = []
    inorder(root,res)
    return res
};

function inorder(root,res){
    if(root===null){
        return
    }
    inorder(root.left,res)
    res.push(root.val)
    inorder(root.right,res)
}

var inorderTraversal = function (root){
    var node =root
    var stack = []ß
    var res = []
    while(node != null || stack.length>0){
        if(node != null){
            stack.push(node)
            node=node.left
        }else{
            node = stack.pop()
            res.push(node.val)
            node=node.right
        }   
    }
    return res
}
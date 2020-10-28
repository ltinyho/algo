// 合并有序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 创建一个虚拟节点,从两个链表的头结点一次遍历,当其中一个链表为空时,后续链表直接指向另一个链表
var mergeTwoLists = function (l1, l2) {
  var dummy = new ListNode(-1);
  var temp = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }
  temp.next = (l1 === null) ? l2 : l1;
  return dummy.next;
};

// 单链表反转
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var prev = null;
  var cur = head;

  while (cur) {
    var next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  var node = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return node;
};



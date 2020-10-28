/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// determine if a linked list has a cycle in it.
// 快慢指针,如果慢指针出现过等于快指针,则有环.
var hasCycle = function (head) {
  if (head === null) {
    return false;
  }
  var slow = head;
  var fast = head.next;
  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

// 集合判断法,判断元素是否出现过
var hasCycle = function (head) {
  var m = new Set();
  var cur = head;
  while (cur) {
    if (m.has(cur)) {
      return true;
    }
    m.add(cur);
    cur = cur.next;
  }
  return false;
};


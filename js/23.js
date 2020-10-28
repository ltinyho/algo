/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 采用分治合并的办法 [0,1,2,3] 第0跟第3合并,第1跟第2合并,即 arr[i],arr[len-1-i] 合并
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  var right = Math.floor(lists.length / 2);
  var len = lists.length;
  while (right > 0) {
    for (let i = 0; i <= right; i++) {
      var min = i;
      var max = len - 1 - i;
      if (min < max) {
        lists[min] = mergeTwoLists(lists[min], lists[max]);
      } else {
        lists[0] = mergeTwoLists(lists[0], lists[min]);
      }
    }
    len = right;
    right = Math.floor(len / 2);
  }
  return lists[0];
};
var mergeTwoLists = function (l1, l2) {
  var dummy = new ListNode(0);
  var temp = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
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

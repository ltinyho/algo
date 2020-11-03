// 实现基于链表法解决冲突问题的散列表
function ListNode(key, val) {
  this.key = (key === undefined ? 0 : key);
  this.val = (val === undefined ? 0 : val);
  this.next = null
}

function Map(len) {
  this.arr = new Array(len);
  this.len = len;
  this.size = 0
  this.set = function (key, val) {
    var idx = hash(key) % this.arr.length;
    var first = this.arr[idx][0];
    if (first === null) {
      this.arr[idx][0] = new ListNode(key, val);
    } else {
      var cur = this.arr[idx][0];
      while (cur.next) {
        if (cur.next.key === key) {
          cur.next.val = val;
          return this;
        } else {
          cur = cur.next;
        }
      }
      cur.next = new ListNode(key, val)
      this.size++
    }
  };
}

function hash(val) {
  return;
}



function Node(key, val) {
  this.prev = null;
  this.next = null;
  this.val = val;
  this.key = key;
}

function LRU(size) {
  this.size = size;
  this.len = 0;
  this.head = null;
  this.tail = null;
}

LRU.prototype.set = function (key, val) {
  if (this.head === null) {
    this.head = new Node(key, val);
    this.tail = this.head;
    return;
  }else if(this.head.key===key){
    this.head.val = val
    return
  }
  var cur = this.head;
  var find = null;
  while (cur && cur.next) {
    if (cur.next.key === key) {
      find = cur.next;
      break;
    }
    cur = cur.next;
  }
  if (find === null) {// 元素不存在,新增节点
    var newNode = new Node(key, val);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    if (this.len >= this.size - 1) {// 已满
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.len++;
    }
  } else {// 元素存在,将元素提到head
    console.log(find.val);
    find.prev.next = find.next;
    find.next = this.head;
    this.head.prev = find
    this.head = find;

  }
  return this;
};

LRU.prototype.toString = function () {
  var cur = this.head;
  var data = [];
  while (cur) {
    data.push(cur.val);
    cur = cur.next;
  }
  console.log(data);
};

module.exports = {
  LRU,
};

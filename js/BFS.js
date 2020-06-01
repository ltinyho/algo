/*BFS(Breadth First Search) 搜索套路: 需要一个队列存下一层需要遍历的节点,有时需要一个集合存访问过的元素,特别是对于图来说*/
function BFS(start) {
  var queue = [];
  var visited = new Set();
  queue.push(start);
  while (queue.length) {
    var tempQueue = [];
    for (let i = 0; i < queue.length; i++) {
      var node = queue.shift();
      process(node); // 具体的节点操作
      visited.add(node);
      if (node.left) {
        tempQueue.push(node.left);
      }
      if (node.right) {
        tempQueue.push(node.right);
      }
    }
    queue = tempQueue;
  }
}
/*DFS (Deepth FIrst Search)*/
function DFS(start) {
  if (start === null) {
    return;
  }
  DFS(start.left);
  DFS(start.right);
}

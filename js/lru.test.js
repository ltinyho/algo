const {
  LRU,
} = require('./lru');

it('Lru', function () {
  var lru = new LRU(5);
  lru.set(1, 1);
  lru.set(2, 2);
  lru.set(3, 3);
  lru.set(4, 4);
  lru.set(5, 5);
  lru.set(6, 6);
  lru.set(1, 1);
  lru.set(3, 7);
  lru.set(3, 54);
  lru.toString()
});

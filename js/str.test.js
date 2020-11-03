const {
  searchStr,
} = require('./str');

it('BF 字符串搜索', function () {
  var idx = searchStr('abcdedfgef', 'ef');
  console.log(idx);
});

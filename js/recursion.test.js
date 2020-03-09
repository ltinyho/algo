function factorial(n) {
  if (n === 1) return 1;
  console.log('n*n-1=%s*%s', n, n - 1);
  return n * factorial(n - 1);
}

function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  var pow = 1;
  while (n) {
    if (n & 1) {
      pow *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return pow;
};
// map 存count
var majorityElement = function(nums) {
  var map={}
  for(let i=0; i <nums.length;i++){
    var item=nums[i]
    console.log(item,map[item]);
    if (map[item]===undefined){
      map[item] = 1
    }else{
      map[item] +=1
    }
    if (map[item] > nums.length/2){
      return item
    }
  }
  return -1
};
it('should ', function () {
  var a = myPow(2, -10);
  console.log(a);
 var b =  majorityElement([1,2,3,2,2])
  console.log(b);
});

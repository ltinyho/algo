var KthLargest = function (k, nums) {
  this.k = k;
  nums.sort(function (a, b) {
    return b - a;
  });
  this.data = []; // size k,desc sort,get first element
  for (let i = 0; i < nums.length; i++) {
    this.data.push(nums[i]);
  }

};
KthLargest.prototype.add = function (val) {
  if (this.data.length < this.k) {
    this.data.push(val);
    this.data.sort((x, y) => y - x);
  } else {
    for (let i = 0; i < this.k; i++) {
      if (val > this.data[i]) {
        for (let j = this.k - 1; j > i; j--) {
          this.data[j] = this.data[j - 1];
        }
        this.data[i] = val;
        break;
      }
    }
  }
  if (this.data.length > this.k) {
    return this.data[this.k - 1];
  } else {
    return this.data[this.data.length - 1];
  }
};

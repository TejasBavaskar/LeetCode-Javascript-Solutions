//O(n^2)
var maxProduct = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (j = i; j < nums.length; j++) {
      prod = prod * nums[j];
      max = Math.max(max, prod);
    }
  }

  return max;
};

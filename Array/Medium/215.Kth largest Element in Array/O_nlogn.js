//O(nlogn)
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);   //nlogn
  return nums[k - 1];
};

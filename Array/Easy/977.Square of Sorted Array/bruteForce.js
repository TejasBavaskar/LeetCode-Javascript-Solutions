//O(nlogn)
var sortedSquares = function(nums) {
  return nums.map(item => item*item).sort((a, b) => a-b);
};
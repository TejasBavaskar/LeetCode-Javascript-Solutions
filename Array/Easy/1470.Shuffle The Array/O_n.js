//O(n)
var shuffle = function(nums, n) {
  let result = [];
  let i = 0;
  let j = n;
  while(j < nums.length) {
      result.push(nums[i]);
      result.push(nums[j]);
      i++;
      j++;
  }
  
  return result;
};
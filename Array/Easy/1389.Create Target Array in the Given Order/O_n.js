//O(n)
var createTargetArray = function(nums, index) {
  let result = [];
  let i = 0;
  let j = 0;
  
  while(i<nums.length && j<index.length) {
      //result[index[j]] = nums[i];
      result.splice(index[j], 0, nums[i]);
      i++;j++;
  }
  console.log(result);
  return result;
};
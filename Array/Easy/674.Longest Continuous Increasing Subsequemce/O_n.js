//O(n)
var findLengthOfLCIS = function(nums) {
  let min = 0;
  let result = [];
  for(let i=0; i<nums.length-1; i++) {
      if(nums[i] < nums[i+1]) {
          min++;
          if(i == nums.length-2) {
              
              result.push(min+1);
          }
      } else {
          result.push(min+1);
          min = 0;
      }
  }
  return result.length ? Math.max(...result) : nums.length;
};
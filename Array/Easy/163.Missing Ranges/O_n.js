//O(n)
var findMissingRanges = function(nums, lower, upper) {
  let result = [];
  let prev = lower - 1;
  let current = 0;
  
  for(let i=0; i<=nums.length; i++) {
      if(i === nums.length) {
          current = upper + 1;
      } else {
          current = nums[i];
      }
      
      
      if(prev + 1 <= current - 1) {
          if(prev + 1 === current - 1) {
              result.push(`${prev+1}`);
          } else {
              result.push(`${prev+1}->${current-1}`);
          }
      }
      prev = current;
      
  }
  return result;
};
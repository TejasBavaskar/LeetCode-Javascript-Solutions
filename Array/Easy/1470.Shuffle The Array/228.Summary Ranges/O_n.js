//O(n)
var summaryRanges = function(nums) {
  let minRange = nums[0];
  let maxRange = nums[0];
  let result = [];
  
  for(let i=0; i<nums.length; i++) {
      maxRange = nums[i];
      if(nums[i] + 1 === nums[i+1]) {
          if(i === nums.length-2) {
              result.push(`${minRange}->${nums[i+1]}`);
              return result;
          }       
      } else {
          if(minRange !== maxRange)
              result.push(`${minRange}->${maxRange}`);
          else if(minRange === maxRange)
              result.push(`${minRange}`);

          minRange = nums[i+1];
          //maxRange = nums[i+1];
      }
  }   
  
  return result;
};
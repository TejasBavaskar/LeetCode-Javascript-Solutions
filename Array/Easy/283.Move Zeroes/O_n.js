//O(n)
var moveZeroes = function(nums) { 
  let i = 0;
  for(let j=0; j< nums.length; j++) {
      if(nums[j] !== 0) {
          if(j>i) {
              nums[i] = nums[j];
              nums[j] = 0;
          }
          i++;
      }
  }
};
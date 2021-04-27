//O(m*n)
var minStartValue = function(nums) {
    
  for(let i=1; ;i++) {
      let sum = i;
      let j = 0;
      for(j=0; j<nums.length; j++) {
          sum = sum + nums[j];
          if(sum < 1)
              break;
      }
      
      if(j === nums.length) {
          return i;
      }
  }
};
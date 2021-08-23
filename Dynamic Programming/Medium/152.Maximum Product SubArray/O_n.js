//O(n)
var maxProduct = function(nums) {
  let result = nums[0];
  let max = nums[0];
  let min = nums[0];
  
  for(let i=1; i<nums.length; i++) {
    
      let tempMax = Math.max(max*nums[i], nums[i], min*nums[i]);    //can not assign value to max directly 
                                                                    //because we want to use old max value
                                                                    // in next line for comparison
      min = Math.min(max*nums[i], nums[i], min*nums[i]);
      
      max = tempMax;
      result = Math.max(result, max);
  }
  
  return result; 
};
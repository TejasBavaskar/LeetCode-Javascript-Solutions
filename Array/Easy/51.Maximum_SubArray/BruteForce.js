//O(n^2)
var maxSubArray = function(nums) {
  let maxSum = -Number.MAX_VALUE; 
  // Number.MIN_VALUE gives smallest positive integer which is > -1
  //or use Number.MIN_SAFE_INTEGER

  for(let i=0; i<nums.length; i++) {
      let currentSum = 0;
      for(let j=i; j<nums.length; j++) {
          currentSum = currentSum + nums[j];
          maxSum = Math.max(maxSum, currentSum);
      }
  }
  return maxSum;
};
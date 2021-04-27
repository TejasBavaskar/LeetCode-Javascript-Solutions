//O(n) --> Kadane's Algorithm

var maxSubArray = function(nums) {
  let maxtillNow = nums[0];
  let maxSum = nums[0];
  
  for(let i=1; i<nums.length; i++) {
      maxtillNow = Math.max(maxtillNow + nums[i], nums[i]);
      maxSum = Math.max(maxSum, maxtillNow);
  }
  return maxSum;
};
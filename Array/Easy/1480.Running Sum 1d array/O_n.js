//O(n)
var runningSum = function(nums) {
  let sum = 0;
  for(let i=0; i< nums.length; i++){
      sum = sum + nums[i];
      nums[i] =sum;
  }
  
  return nums;
};

// OR ----------------- Using Map

var runningSum = function(nums) {
  let sum = 0;
  nums = nums.map(item => {
      sum = sum + item;
      return sum;
  })
  
  return nums;
};
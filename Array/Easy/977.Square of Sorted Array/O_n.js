//O(n)
var sortedSquares = function(nums) {
  let left = 0;
  let right = nums.length-1;
  let sqr = 0;
  let result = [];
  
  for(let i=nums.length-1; i>=0; i--) {
      if(Math.abs(nums[left]) < Math.abs(nums[right])) {
          sqr = nums[right];
          right--;
      } else {
          sqr = nums[left];
          left++;
      }
      result[i] = sqr * sqr;
  }
  return result; 
}
//O(mn)
var decompressRLElist = function(nums) {
  let result = [];
  for(let i=0; i<nums.length; i +=2) {
      while(nums[i] > 0) {
          result.push(nums[i+1]);
          nums[i]--;
      }
  }
  return result;
};
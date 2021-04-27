//O(n)
var containsDuplicate = function(nums) {
  let dict= {};
  for(let i=0; i<nums.length; i++) {
      if(nums[i] in dict) {
          return true;
      } else {
          dict[nums[i]] = 1;
      }
  }
  
  return false;
};
//O(n)
var containsNearbyDuplicate = function(nums, k) {
  let dict = {};
  
  for(let i=0; i<nums.length; i++) {
      if(nums[i] in dict) {
          if(Math.abs(i - dict[nums[i]]) <= k)
              return true;
          else
              dict[nums[i]] = i;
      } else {
          dict[nums[i]] = i;
      }
  }
  console.log(dict);
  return false;
};
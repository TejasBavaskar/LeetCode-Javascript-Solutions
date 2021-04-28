//O(nlogn)
var frequencySort = function(nums) {
  let dict = {};
  for(let i=0; i<nums.length; i++) {
      if(nums[i] in dict) {
          dict[nums[i]]++; 
      } else {
          dict[nums[i]] = 1;
      }
  }
  
  return nums.sort((a,b) => {
      if(dict[a] === dict[b]) {
          return b-a;
      } else {
          return dict[a] - dict[b];
      }
  })
};
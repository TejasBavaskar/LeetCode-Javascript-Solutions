//O(n)
var missingNumber = function(nums) {
  let dict = {};
  nums.forEach(num => dict[num] = num);
  
 for(let i=0; i<=nums.length; i++) {
      if(!(i in dict)) {
          return i;
      }
  }
};
var majorityElement = function(nums) {
  var dict = {};
  
  nums.forEach(ele => {
      if(ele in dict) {
          dict[ele] = dict[ele] + 1;
      } else {
          dict[ele] = 1;
      }
  })
  
  for(const prop in dict) {
      if(dict[prop] > nums.length/2) {
          return prop;
      }
  }
};
var maximumProduct = function(nums) {
  nums.sort((a,b)=>b-a);
  //After Sorting
  //either max product of first 3 positive integers
  //or
  //if array has negative integers then,
  //product of first and last two integers  Ex: [4,3,2,1,-6,-99,-100]
  
  return  Math.max(nums[0]*nums[1]*nums[2] , nums[0]*nums[nums.length-1] * nums[nums.length-2]);
};
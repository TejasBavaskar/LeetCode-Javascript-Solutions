//O(n)
//Space Complexity: O(m)
//n = total nodes    m = nums.length
var numComponents = function(head, nums) {    
  let flag = false;
  let temp = head;
  let count = 0;
  
  let map = new Map();
  for(let i=0; i<nums.length; i++) {
      map.set(nums[i], i);
  }
  
  while(temp) {
      if(map.has(temp.val)) {
          if(!flag)
              count++;
          flag = true;
      } else {
          flag = false;
      }
      temp = temp.next;
  }
  
  return count;
};
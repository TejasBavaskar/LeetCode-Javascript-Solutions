//O(m*n)
//n = total nodes    m = nums.length
var numComponents = function(head, nums) {    
  let flag = false;
  let temp = head;
  let count = 0;
  
  while(temp) { //n
      if(nums.includes(temp.val)) { //m
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
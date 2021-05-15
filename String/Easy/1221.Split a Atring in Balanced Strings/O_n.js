//O(n)
var balancedStringSplit = function(s) {
  let left = 0;
  let right = 0;
  let count = 0;
  
  for(let i=0; i<s.length; i++) {
      if(s[i] === 'R') {
          right++;
      } else if(s[i] === 'L') {
          left++;
      }
      
      if(right === left) {
          count++;
          right = 0;
          left = 0;
      }
  }
  
  return count;
};
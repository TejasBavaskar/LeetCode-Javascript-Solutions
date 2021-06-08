//O(n^2)
var isSubsequence = function(s, t) {
  let temp = s.split('');
  let lastIndex = 0;
  for(let i=0; i<temp.length; i++) {
      let idx = t.indexOf(temp[i], lastIndex);
      if(idx === -1) {
         return false;
      }
      
      lastIndex = idx+1;
  }
  
  return true;
};
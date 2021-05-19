//O(n)
var checkRecord = function(s) {
  s = s.split('');
  let lateCount = 0;
  let absentCount = 0;
  
  for(let i=0; i<s.length; i++) {
      if(s[i] === 'A') {
          absentCount++;
          lateCount = 0;
      } else if(s[i] === 'L') {
          lateCount++;
      } else {
          lateCount = 0;
      }
      
      if(absentCount >= 2 || lateCount >=3) {
          return false;
      }
  }
  
  return true;
};
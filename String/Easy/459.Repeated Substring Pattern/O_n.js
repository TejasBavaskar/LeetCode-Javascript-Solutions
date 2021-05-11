//O(n/2) => O(n)

var repeatedSubstringPattern = function(s) {
  if(s.length <= 1) {
      return false;
  }
  
  for(let i=1; i<=s.length/2; i++) {
      if(s.length % i === 0 && s.substr(0, i).repeat(s.length/i) === s) {
          return true;
      }
  }
  
  return false;
};
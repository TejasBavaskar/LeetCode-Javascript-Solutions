//O(n)
var firstUniqChar = function(s) {
  let dict = {};
  for(let i=0; i<s.length; i++) {
      if(s[i] in dict) {
          dict[s[i]]++;
      } else {
          dict[s[i]] = 1;
      }
  }
  
  for(let i=0; i<s.length; i++) {
      if(dict[s[i]] === 1) {
          return i;
      }
  }
  return -1;
};
//O(n)
var longestCommonPrefix = function(strs) {
  if(strs.length === 0)
      return '';
  let result = '';
  for(let i=0; i<strs[0].length; i++) {
      
      for(let j=0; j<strs.length; j++) {
          if(strs[0].charAt(i) !== strs[j].charAt(i)) {
              return result;
          }
      }
      result += strs[0].charAt(i);
  }
  return result;
};
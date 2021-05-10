//O(n)
var strStr = function(haystack, needle) {
  if(!needle.length) {
      return 0;
  }
  
  return haystack.indexOf(needle);
};

//-----------OR-------------
var strStr = function(haystack, needle) {
  if(!needle) {
      return 0;
  }
  
  for(let i=0; i<haystack.length; i++) {
      if(haystack[i] === needle[0]) {
          if(haystack.substring(i, i + needle.length) === needle) {
              return i;
          }
      }
  }
  
  return -1;
};
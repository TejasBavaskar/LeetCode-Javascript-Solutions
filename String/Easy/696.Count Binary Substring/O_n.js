//O(n)
var countBinarySubstrings = function(s) {
  let group = [];
  let index = 0;
  group[index] = 1;
  for(let i=1; i<s.length; i++) {
      if(s[i-1] !== s[i]) {
          index++;
          group[index] = 1;
      } else {
          group[index]++;
      }
  }
  
  let ans = 0;
  for(let i=1; i<=index; i++) {
      ans += Math.min(group[i-1], group[i]);
  }
  
  return ans;
};
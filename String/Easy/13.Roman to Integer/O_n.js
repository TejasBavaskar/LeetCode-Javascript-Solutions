//O(n)
var romanToInt = function(s) {
  let dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
  let sum = 0;
  
  for(let i=0; i<s.length; i++) {
      console.log(s[i], s[i+1])
      if(dict[s[i]] < dict[s[i+1]]) {
          console.log(dict[s[i+1]],'-', dict[s[i]])
          sum += dict[s[i+1]] - dict[s[i]];
          i++;
      } else {
          sum += dict[s[i]];
      }
  }
  return sum;
};
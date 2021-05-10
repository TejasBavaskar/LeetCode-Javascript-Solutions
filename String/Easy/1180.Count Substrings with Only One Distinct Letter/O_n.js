//O(n)
var countLetters = function(S) {
  let count = 1;
  let total = 1;
  for(let i=1; i<S.length; i++) {
      if(S[i-1] === S[i]) {
          count++;
      } else {
          count = 1;
      }
      total += count;
  }
  
  return total;
};
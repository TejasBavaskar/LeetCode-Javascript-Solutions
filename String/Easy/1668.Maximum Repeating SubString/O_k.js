//O(k)
var maxRepeating = function(sequence, word) {
  let temp = word;
  let count = 0;
  while(sequence.includes(temp)) {
      temp += word;
      count++;
  }
  
  return count;
};
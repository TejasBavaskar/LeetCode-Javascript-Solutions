//O(n)
var findKthPositive = function(arr, k) {
  let count = 0;
  let i = 0;
  let j = 1;
  while(i < arr.length) {
      if(arr[i] !== j) {
          count++;
          if(count === k) {
              return j;
          }
          j++;
      } else {
          i++;
          j++;
      }
  }
  
  return i + k;
};
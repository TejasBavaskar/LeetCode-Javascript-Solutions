//O(n^2)
var sumSubarrayMins = function(arr) {
  let ans = 0;
  
  for(let i=0; i<arr.length; i++) {
      let min = arr[i];
      for(let j=i; j<arr.length; j++) {
          if(i === j) {
              ans += min;
          } else {
              min = Math.min(min, arr[j]);
              ans += min;
          }
      }
  }
  return ans % (Math.pow(10, 9) + 7);
};
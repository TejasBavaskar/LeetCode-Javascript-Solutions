//O(logn)
var mySqrt = function(x) {
  if(x === 0) {
      return x;
  }
  
  let start = 1;
  let end = x;
  
  while(start <= end) {
      let mid = Math.floor((start+end)/2);
      let temp = mid * mid;
      
      if(temp === x) {
          return mid;
      } else if(temp > x) {
          end = mid - 1;
      } else {
          start = mid + 1;
      }
  }
  
  return start-1;
};
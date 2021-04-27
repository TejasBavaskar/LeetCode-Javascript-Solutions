//O(n)
var isMonotonic = function(A) {
  let isIncreasing = true;
  let isDecreasing = true;
  for(let i=0; i<A.length-1; i++) {
      if(A[i] < A[i+1]) {
          isDecreasing = false;
      } else if(A[i] > A[i+1]) {
          isIncreasing = false;
      }
  }
  return isIncreasing || isDecreasing;
};
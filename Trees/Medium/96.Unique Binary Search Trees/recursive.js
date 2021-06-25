//O(n^2)
var numTrees = function(n) {
  var countBST = function(start, end) {
      let sum = 0;
      
      if(start >= end) {
          return 1;
      }
      
      for(let i=start; i<=end; i++) {
          let left = countBST(start, i-1);
          let right = countBST(i+1, end);
          
          sum += left * right;
      }
      return sum;
  }
  
  return countBST(1, n);
};
//O(n logn)
var getMinimumDifference = function(root) {
  let result = [];
  var preOrder = function(root) { // n
      if(!root) {
          return;
      }
      
      result.push(Math.abs(root.val));
      preOrder(root.left);
      preOrder(root.right);
  }
  
  preOrder(root);

  result.sort((a,b) => {  // nlogn
      if(a === b)
          return 0;
      else if(a > b)
          return 1;
      else
          return -1;
  })
  
  let min = Number.MAX_VALUE;
  for(let i=0; i<result.length-1; i++) {  // n
      min = Math.min(min, result[i+1] - result[i]);
  }
  
  return min;
};
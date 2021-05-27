//O(n)
var getMinimumDifference = function(root) {
  let lastDiff = null;
  let min = Number.MAX_VALUE;
  
  var inOrder = function(root) {
      if(!root) {
          return;
      }
      
      inOrder(root.left);
      
      if(lastDiff !== null) {
         min = Math.min(min, Math.abs(lastDiff - root.val));
      }
      
      lastDiff = root.val;
      inOrder(root.right);
  }
  
  inOrder(root);
  return min;
};
//O(n)
var largestBSTSubtree = function(root) {
  if(!root) {
      return 0;
  }
  
  let maxCount = 0;
  var findNodes = function(root) {
      if(!root) {
          //return(size, min, max)
          return [0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
      }
      
      let [lCount, lmin, lmax] = findNodes(root.left);
      let [rCount, rmin, rmax] = findNodes(root.right);
      
      if(root.val <= lmax || root.val >= rmin || lCount === -1 || rCount === -1) {
          return [-1, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
      }
      
      let currentSize = lCount + rCount + 1;
      maxCount = Math.max(maxCount, currentSize);
      
      return [currentSize, Math.min(root.val, lmin), Math.max(root.val, rmax)];
  }
  
  findNodes(root);
  return maxCount;
};
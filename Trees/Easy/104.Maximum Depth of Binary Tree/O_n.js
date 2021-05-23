//O(n)
var maxDepth = function(root) {
  var depthUtil = function(root) {
      if(!root) {
          return 0;
      }
      
      let depth = 1 + Math.max(depthUtil(root.left), depthUtil(root.right));
      
      return depth;
  }
  
 return depthUtil(root);
};
//O(n)
var invertTree = function(root) {
  if(!root) {
   return root;
  }
  
  var invertUtil = function(root) {
      if(!root || (!root.left && !root.right)) {
          return;
      }
      
      var tempNode = root.left;
      root.left = root.right;
      root.right = tempNode;
      
      invertUtil(root.left);
      invertUtil(root.right);
  }
  
  invertUtil(root);
  
  return root;
};
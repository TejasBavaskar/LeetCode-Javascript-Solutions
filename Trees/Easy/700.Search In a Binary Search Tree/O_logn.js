//O(logn) => soution is just like binary seach algorithm where log(n) = height till that node
var searchBST = function(root, val) {
  var findNode = function(root) {
      if(!root) {
          return null;
      }
      
      if(val < root.val) {
          return findNode(root.left);
      } else if(val > root.val) {
          return findNode(root.right);
      } else {
          return root;
      }
  }
  
  return findNode(root);
};
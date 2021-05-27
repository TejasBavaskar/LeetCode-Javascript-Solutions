//O(n)
var inorderTraversal = function(root) {
  let result = [];
  
  var inOrder = function(root) {
      if(!root) {
          return;
      }
      
      inOrder(root.left);
      result.push(root.val);
      inOrder(root.right);
  }
  
  inOrder(root);
  
  return result;
};
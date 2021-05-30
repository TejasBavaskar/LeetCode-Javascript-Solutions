//O(n)
var preorderTraversal = function(root) {
  let result = [];
  
  var preOrder = function(root) {
      if(!root) {
          return;
      }
      
      result.push(root.val);
      preOrder(root.left);
      preOrder(root.right);
  }
  
  preOrder(root);
  return result;
};
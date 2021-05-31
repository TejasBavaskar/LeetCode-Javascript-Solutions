//O(n)
var getLonelyNodes = function(root) {
  let result = [];
  
  var preOrder = function(root) {
      if(!root) {
          return;
      }
      
      if(root.left && !root.right) {
          result.push(root.left.val);
      }
      
      if(!root.left && root.right) {
          result.push(root.right.val);
      }
      
      preOrder(root.left);
      preOrder(root.right);
  }
  
  preOrder(root);
  
  return result;
};
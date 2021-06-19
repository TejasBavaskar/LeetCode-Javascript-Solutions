//O(n)  => Using inorder
var isValidBST = function(root) {
  let result = [];
  
  var inorder = function(root) {
      if(!root) {
          return;
      }
      
      inorder(root.left);
      result.push(root.val);
      inorder(root.right);
  }
  
  inorder(root);
  
  for(let i=1; i<result.length; i++) {
      if(result[i-1] >= result[i]) {
          return false;
      }
  }
  
  return true;
};
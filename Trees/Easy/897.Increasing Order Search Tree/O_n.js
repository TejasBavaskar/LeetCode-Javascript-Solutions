//O(n)
var increasingBST = function(root) {
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
  let newRoot = new TreeNode(result[0]);
  let prev = newRoot;
  
  for(let i=1; i<result.length; i++) {
      let current = new TreeNode(result[i]);
      prev.right = current;
      prev = current;
  }

  return newRoot;
};
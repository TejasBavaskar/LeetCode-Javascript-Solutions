//O(m+n) => first tree has n ndes and second tree has n nodes
var leafSimilar = function(root1, root2) {
  let tree1 = [];
  let tree2 = [];
  
  var inOrder = function(root, tree) {
      if(!root) {
          return;
      }
      
      inOrder(root.left, tree);
      if(!root.left && !root.right) {
          tree.push(root.val);
      }
      inOrder(root.right, tree);
  }
  
  inOrder(root1, tree1);
  inOrder(root2, tree2);
  
  if(JSON.stringify(tree1) === JSON.stringify(tree2)) {
      return true;
  }
  
  return false;
};
//O(n) => using inorder data
var closestValue = function(root, target) {
  let nodes = [];
  var inorder = function(root) {
      if(!root) {
          return;
      }
      inorder(root.left);
      nodes.push(root.val);
      inorder(root.right);
  }
  
  inorder(root);
  
  let min = Number.POSITIVE_INFINITY;
  let answer = -1;
  
  nodes.forEach(val => {
      if(Math.abs(val - target) < min) {
          min = Math.abs(val - target);
          answer = val;
      }
  })
  
  return answer;
};
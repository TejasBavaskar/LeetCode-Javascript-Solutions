//O(n)
var rangeSumBST = function(root, low, high) {
  let sum = 0;
  
  var inorder = function(root) {
      if(!root) {
          return;
      }
      
      if(root.val >= low && root.val <= high) {
          sum += root.val;
      }
      
      inorder(root.left);
      inorder(root.right);
  }
  
  inorder(root);
  return sum;
};

//--------------- OR ----------------
//O(n)
var rangeSumBST = function(root, low, high) {
  if(!root) {
      return;
  }
  
  let sum = 0;
  let queue = [];
  
  queue.push(root);
  
  while(queue.length) {
      let currentNode = queue.shift();
      if(currentNode.val >= low && currentNode.val <= high) {
          sum += currentNode.val;
      }
      
      if(currentNode.left) {
          queue.push(currentNode.left)
      }
      
      if(currentNode.right) {
          queue.push(currentNode.right)
      }
  }
  
  return sum;
};
//O(n)
var postorderTraversal = function(root) {
  let result = [];
  
  var postOrder = function(root) {
      if(!root) {
          return;
      }
      
      postOrder(root.left);
      postOrder(root.right);
      result.push(root.val);
  }
  
  postOrder(root);
  
  return result;
};

//------------ OR -------------
//Iterative
var postorderTraversal = function(root) {
  if(!root) {
      return [];
  }
  let result = [];
  let queue = [];
  queue.push(root);

  while(queue.length) {
      let current = queue.pop();
      
      result.unshift(current.val);
      
      if(current.left) {
          queue.push(current.left);
      }
      
      if(current.right) {
          queue.push(current.right);
      }
  }
  
  return result;
};
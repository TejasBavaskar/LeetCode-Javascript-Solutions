//O(n)
var isUnivalTree = function(root) {
  let data = root.val;
  
  var preOrder = function(root) {
      if(!root) {
          return true;
      }
      
      if(root.val !== data) {
          return false;
      }
      
      return preOrder(root.left) && preOrder(root.right);
  }
  
  return preOrder(root);
};

//----------- OR ------------
//BFS iterative

var isUnivalTree = function(root) {
  let queue = [];
  queue.push(root);
  let data = root.val;
  
  while(queue.length) {
      let temp = queue.shift();
      
      if(temp.val !== data) {
          return false;
      }
      
      temp.left && queue.push(temp.left);
      temp.right && queue.push(temp.right);
  }
  
  return true;
};

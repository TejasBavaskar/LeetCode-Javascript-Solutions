//O(n) => Using DFS
var goodNodes = function(root) {
  let count = 0;
  
  var findNodes = function(root, max) {
      if(!root) {
          return;
      }
      
      if(root.val >= max) {
          count++;
          max = root.val;
      }
      
      let left = findNodes(root.left, max);
      let right = findNodes(root.right, max);
  }
  
  findNodes(root, Number.MIN_SAFE_INTEGER);
  
  return count;
};
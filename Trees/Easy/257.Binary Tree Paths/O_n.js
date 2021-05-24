//O(n)
var binaryTreePaths = function(root) {
  let totalPath= [];
  
  var findPath = function(root, currentPath, totalPath) {
      if(!root) {
          return;
      }
      
      currentPath += root.val.toString();
      if(!root.left && !root.right) {
          totalPath.push(currentPath);
      } else {
          currentPath += '->';
          if(root.left) {
              findPath(root.left, currentPath, totalPath);
          }
          
          if(root.right) {
              findPath(root.right, currentPath, totalPath);
          }
      }
  }
  
  findPath(root, '', totalPath);
  return totalPath;
};
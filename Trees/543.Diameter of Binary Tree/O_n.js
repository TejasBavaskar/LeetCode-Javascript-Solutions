//O(n)
var diameterOfBinaryTree = function(root) {
  let max = 0;
  
  var getDiameter = function(root) {
      if(!root) {
          return 0;
      }

      let left = getDiameter(root.left);
      let right = getDiameter(root.right);
      let temp = 1 + Math.max(left, right);

      max = Math.max(max, left + right)    
      return temp;
  }
      
  getDiameter(root);
  return max;
};
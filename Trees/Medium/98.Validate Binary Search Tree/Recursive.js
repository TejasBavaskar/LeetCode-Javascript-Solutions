//O(n)
var isValidBST = function(root) {
  if(!root) {
      return true;
  }
  
  var isBST = function(root, leftThreshold, rightThreshold) {
      if(!root) {
          return true;
      }
      
      if((leftThreshold && root.val <= leftThreshold.val) || (rightThreshold && root.val >= rightThreshold.val))          {
          return false;
      }
      

      return isBST(root.left, leftThreshold, root) && isBST(root.right, root, rightThreshold);
  }
  
  return isBST(root, null, null);  
};

//-------------------- OR ----------------------
//O(n)
var isValidBST = function(root) {
  if(!root) {
      return true;
  }
  
  var isBST = function(root, min, max) {
      if(!root) {
          return true;
      }
      
      if(root.val < min || root.val > max) {
          return false;
      }
      
      let left = isBST(root.left, min, root.val-1);
      let right = isBST(root.right, root.val+1, max);
      
      return left && right;  
  }
  
  return isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);  
};
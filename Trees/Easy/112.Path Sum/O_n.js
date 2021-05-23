//O(n) => in worst case target sum is in last branch (root to leaf last branch)
var hasPathSum = function(root, targetSum) {
  if(!root) {
      return false;
  }
  
  if(!root.left && !root.right && root.val === targetSum) {
      return true;
  }
  targetSum = targetSum - root.val;
      
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
//O(nlogn) => for each node i.e 'n', checking height i.e. calling for log(n) times
//Top Down approach (first checking the condition and then calling the function)
var isBalanced = function(root) {
  if(!root) {
      return true;
  }
  
  if(Math.abs(findHeight(root.left) - findHeight(root.right)) > 1) {
      return false;
  } else {
      return isBalanced(root.left) && isBalanced(root.right);
  }
};

var findHeight = function(root) {
  if(!root) {
      return 0;
  }
  
  return 1 + Math.max(findHeight(root.left), findHeight(root.right));
}

//------------- OR --------------
//O(n) => Bottom Up  approach (first calling the function and then checking the condition)
var isBalanced = function(root) {
  var findHeight = function(root) {
      if(!root) {
          return 0;
      }
      
      let leftHeight = findHeight(root.left);
      let rightHeight = findHeight(root.right);
      
      if(leftHeight === -1 || rightHeight === -1) {
          return -1;
      }
      
      if(Math.abs(leftHeight - rightHeight) <= 1) {
          return 1 + Math.max(leftHeight, rightHeight);
      } else {
          return -1;
      }
  }

  if(findHeight(root) !== -1) {
      return true;
  } else {
      return false;
  }
};

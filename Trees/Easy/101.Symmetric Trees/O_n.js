//O(n)
var isSymmetric = function(root) {
  let leftResult = [];
  var leftDfs = function(root) {
      if(!root) {
          leftResult.push(root);
          return;
      }
      leftResult.push(root.val);
      leftDfs(root.left);
      leftDfs(root.right);    
  }
  
  let rightResult = [];
  var rightDfs = function(root) {
      if(!root) {
          rightResult.push(root);
          return;
      }
      rightResult.push(root.val);
      rightDfs(root.right); 
      rightDfs(root.left);
  }
  
  leftDfs(root.left);
  rightDfs(root.right);
  
  if(JSON.stringify(leftResult) === JSON.stringify(rightResult)) {
      return true;
  }
  return false;
};

//------------- OR --------------
//O(n)
var isSymmetric = function(root) {
  if(!root) {
      return false;
  }
  
  var checkTree = function(root1, root2) {
      if(!root1 && !root2) {
          return true;
      }
      
      if(root1 && root2) {
          if(root1.val === root2.val) {
              return checkTree(root1.left, root2.right) && checkTree(root1.right, root2.left);
          }
          return false;
      }
      
      return false;
  }
  
  return checkTree(root.left, root.right);
};
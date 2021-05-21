//O(n)
var isSubtree = function(root, subRoot) {
  if(root === null) {
      return false;
  } else if(isSameTree(root, subRoot)) {
      return true;
  } else {
      return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
};

var isSameTree = function(root, subRoot) {
  if(root === null || subRoot === null) {
      return !root && !subRoot;
  } else if(root.val === subRoot.val) {
      return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right);
  } else {
      return false;
  }
}

//------------------ OR ----------------------
//O(m * n)
var isSubtree = function(root, subRoot) {
  let subTreeInorder = [];
  var inorder = function(root) {
          if(!root) {
              subTreeInorder.push(undefined);
              return;
          }
          subTreeInorder.push(root.val);
          inorder(root.left);
          inorder(root.right);
      }
  inorder(subRoot);

  var checkSubTree = function(root, subRoot) {
      if(!root){
          return false;
      } 
      
      if(root.val === subRoot.val) {
          let inorderData = [];
          var inorder = function(root) {  // calling inorder for m no. of times in case of duplicate elements in tree
              if(!root) {
                  inorderData.push(undefined);
                  return null;
              }
              inorderData.push(root.val);
              let l = inorder(root.left);
              let r = inorder(root.right);
          }
          
          inorder(root);
          console.log(inorderData, subTreeInorder);    
          if(JSON.stringify(inorderData) === JSON.stringify(subTreeInorder)) {
              console.log('True');
              return true;
          }
      }
      
      let left = checkSubTree(root.left, subRoot);
      let right = checkSubTree(root.right, subRoot);
        
      if(left || right) {
          return true;
      }
      return false;
  }

  return checkSubTree(root, subRoot)
};
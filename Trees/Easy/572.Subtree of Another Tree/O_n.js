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
    let subTreePreorder = [];
    var preorder = function(root) {
            if(!root) {
                subTreePreorder.push(undefined);
                return;
            }
            subTreePreorder.push(root.val);
            preorder(root.left);
            preorder(root.right);
        }
    preorder(subRoot);

    var checkSubTree = function(root, subRoot) {
        if(!root){
            return false;
        } 
        
        if(root.val === subRoot.val) {
            let preorderData = [];
            var preorder = function(root) { // calling inorder for m no. of times in case of duplicate elements in tree
                if(!root) {
                    preorderData.push(undefined);
                    return null;
                }
                preorderData.push(root.val);
                let l = preorder(root.left);
                let r = preorder(root.right);
            }

            preorder(root);
            
            if(JSON.stringify(preorderData) === JSON.stringify(subTreePreorder)) {
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
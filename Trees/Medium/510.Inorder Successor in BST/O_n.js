//O(n) => in worst case (skew tree) height = n
var inorderSuccessor = function (node) {
  let temp = node;
  while (temp.parent) {
    temp = temp.parent;
  }

  let ans = null;
  let isNodeFound = false;
  var inorder = function (root) {
    if (!root) {
      return;
    }

    inorder(root.left);
    if (isNodeFound) {
      if (ans === null) ans = root;
    } else if (node.val === root.val) {
      isNodeFound = true;
    }
    inorder(root.right);
  };

  inorder(temp);
  return ans;
};

//-------------- OR -------------
//O(n)
var inorderSuccessor = function (node) {
  let ans = null;
  if (node.right) {
    ans = node.right;
    while (ans.left) {
      ans = ans.left;
    }
    return ans;
  }

  let current = node.parent;
  let child = node;

  while (current && child !== current.left) {
    child = current;
    current = current.parent;
  }

  return current;
};

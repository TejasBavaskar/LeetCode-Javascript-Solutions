//No recursive call to delete node
//O(n)
var deleteNode = function (root, key) {
  if (!root) {
    return root;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      let temp = root.right;
      root = null;
      return temp;
    } else if (!root.right) {
      let temp = root.left;
      root = null;
      return temp;
    }

    root.val = findMin(root.right, root, root);
  }
  return root;
};

var findMin = function (current, prev, root) {
  while (current.left) {
    prev = current;
    current = current.left;
  }

  let data = current.val;
  if (prev === root) {
    prev.right = current.right;
  } else {
    prev.left = current.right;
  }
  current = null;

  return data;
};

//Delete node recursively
//O(n) or O(h) where h = height
//for skew tree, height = n
var deleteNode = function (root, key) {
  if (!root) {
    return root;
  }

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left && !root.right) {
      root = null;
    } else if (!root.right) {
      root = root.left;
    } else {
      root.val = findMin(root.right);
      root.right = deleteNode(root.right, root.val);
    }
  }
  return root;
};

var findMin = function (current) {
  let temp = current;
  while (temp.left) {
    temp = temp.left;
  }

  return temp.val;
};

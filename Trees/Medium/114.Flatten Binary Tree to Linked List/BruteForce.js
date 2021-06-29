//O(n^2) => recursive
//space complexity = O(1)
var flatten = function (root) {
  if (!root) {
    return;
  }

  let prev = null;

  var traverse = function (root) {
    if (!root) {
      return;
    }

    prev = root;
    if (!root.left && !root.right) {
      return root;
    }

    traverse(root.left);
    if (root.left) {
      prev.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    traverse(root.right);
  };

  traverse(root);
};
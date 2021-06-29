//O(n) => Using Preorder traversal with space complexity = O(n)
var flatten = function (root) {
  if (!root) {
    return;
  }
  let result = [];

  var traverse = function (root) {
    if (!root) {
      return;
    }

    result.push(root);
    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);

  root = result[0];
  let temp = root;

  for (let i = 1; i < result.length; i++) {
    temp.right = result[i];
    temp.left = null;
    temp = temp.right;
  }
};

//--------------- OR ---------------
//O(n) => recursive
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

    traverse(root.right);
    traverse(root.left);

    root.right = prev;
    root.left = null;
    prev = root;
  };

  traverse(root);
};

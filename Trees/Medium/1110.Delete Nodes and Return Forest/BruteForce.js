//O(n) => Using DFS

var delNodes = function (root, to_delete) {
  let result = [];

  var dfs = function (root) {
    if (!root) {
      return false;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    if (left) {
      root.left = null;
    }

    if (right) {
      root.right = null;
    }

    if (to_delete.includes(root.val)) {
      root.left && result.push(root.left);
      root.right && result.push(root.right);

      return true;
    }

    return false;
  };

  dfs(root);

  if (!to_delete.includes(root.val)) {
    result.push(root);
  }
  return result;
};

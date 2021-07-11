//O(n)
var flipMatchVoyage = function (root, voyage) {
  let index = 0;
  let result = [];
  var dfs = function (root, parent) {
    if (!root || result.includes(-1)) {
      return;
    }

    if (root.val !== voyage[index]) {
      if (!parent || !parent.right || parent.right.val !== voyage[index]) {
        if (!result.includes(-1)) {
          result = [-1];
        }
        return;
      }

      result.push(parent.val);
      let temp = parent.right;
      parent.right = root;
      parent.left = temp;
      root = parent.left;
    }

    index++;
    dfs(root.left, root);
    dfs(root.right, root);

    return;
  };

  dfs(root, null);
  return result;
};

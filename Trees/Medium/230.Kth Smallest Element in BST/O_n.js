//O(n)
var kthSmallest = function (root, k) {
  let inorder = [];
  var dfs = function (root) {
    if (!root) {
      return;
    }

    dfs(root.left);
    inorder.push(root.val);
    dfs(root.right);
  };

  dfs(root);

  return inorder[k - 1];
};

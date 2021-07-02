//O(n) => Using DFS
var countNodes = function (root) {
  let count = 0;

  var dfs = function (root) {
    if (!root) {
      return;
    }

    count++;

    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return count;
};

//O(n^2)
var maxAncestorDiff = function (root) {
  let result = [];
  let max = 0;

  var getDiff = function (root, origin) {
    if (!root) {
      return;
    }

    max = Math.max(max, Math.abs(root.val - origin.val));
    getDiff(root.left, origin);
    getDiff(root.right, origin);
  };

  var dfs = function (root) { //n
    if (!root) {
      return;
    }

    max = 0;
    getDiff(root, root);  //n
    result.push(max);

    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return Math.max(...result);
};

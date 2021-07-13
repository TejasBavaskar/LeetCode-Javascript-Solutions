//O(n) => find max and min in every root to leaf path and take their absolute difference
var maxAncestorDiff = function (root) {
  let result = [];
  var dfs = function (root, max, min) {
    if (!root) {
      return;
    }

    max = Math.max(max, root.val);
    min = Math.min(min, root.val);

    if (!root.left && !root.right) {
      result.push(Math.abs(max - min));
      return;
    }

    dfs(root.left, max, min);
    dfs(root.right, max, min);
  };

  dfs(root, -Infinity, Infinity);
  return Math.max(...result);
};

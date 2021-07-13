//O(n)
var longestConsecutive = function (root) {
  let max = 0;
  var dfs = function (root) {
    if (!root) {
      return 0;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    let temp1 = 1;
    let temp2 = 1;

    if (root.left) {
      if (root.left.val === root.val + 1) {
        temp1 += left;
      }
    }
    if (root.right) {
      if (root.right.val === root.val + 1) {
        temp2 += right;
      }
    }

    max = Math.max(max, Math.max(temp1, temp2));
    return Math.max(temp1, temp2);
  };

  dfs(root);
  return max;
};

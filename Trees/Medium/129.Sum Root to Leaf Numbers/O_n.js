//O(n)
var sumNumbers = function (root) {
  let sum = 0;
  var dfs = function (root, str) {
    if (!root) {
      return;
    }

    str += root.val;
    let left = dfs(root.left, str);
    let right = dfs(root.right, str);

    if (!left && !right) {
      sum += parseInt(str);
    }

    return true;
  };

  dfs(root, "");
  return sum;
};

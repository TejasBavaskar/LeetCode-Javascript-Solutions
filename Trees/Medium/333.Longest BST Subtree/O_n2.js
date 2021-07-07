//O(n^2)
var largestBSTSubtree = function (root) {
  let maxCount = 0;
  var dfs = function (root) {
    if (!root) {
      return;
    }

    let [isValid, count] = isValidBST(root);
    if (isValid) {
      maxCount = Math.max(maxCount, count);
    }
    dfs(root.left);
    dfs(root.right);
  };

  var isValidBST = function (root, min = -Infinity, max = Infinity) {
    if (!root) {
      return [true, 0];
    }

    if (root.val <= min || root.val >= max) {
      return [false, 0];
    }

    let [left, lCount] = isValidBST(root.left, min, root.val);
    let [right, rCount] = isValidBST(root.right, root.val, max);

    if (left && right) {
      return [true, 1 + lCount + rCount];
    } else {
      return [false, 0];
    }
  };

  dfs(root);
  return maxCount;
};

//O(n)
var maximumAverageSubtree = function (root) {
  let max = Number.MIN_VALUE;

  var traverse = function (root) {
    if (!root) {
      return [0, 0];
    }

    let [left, leftCount] = traverse(root.left);
    let [right, rightCount] = traverse(root.right);

    let count = 1 + leftCount + rightCount;
    let sum = root.val + left + right;

    max = Math.max(max, sum / count);
    return [sum, count];
  };

  traverse(root);
  return max;
};

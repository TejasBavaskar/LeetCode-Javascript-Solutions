//O(n)
var printTree = function (root) {
  let height = 0;
  var getHeight = function (root) {
    if (!root) {
      return 0;
    }

    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
  };

  height = getHeight(root) - 1;

  let columns = Math.pow(2, height + 1) - 1;
  let rows = height + 1;

  let result = Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(""));

  var traverse = function (root, level, start, end) {
    if (!root) {
      return;
    }

    let mid = Math.floor((start + end) / 2);
    result[level][mid] = root.val.toString();
    traverse(root.left, level + 1, start, mid - 1);
    traverse(root.right, level + 1, mid + 1, end);
  };

  traverse(root, 0, 0, columns);
  return result;
};

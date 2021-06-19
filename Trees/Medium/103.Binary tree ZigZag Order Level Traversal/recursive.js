//O(n) => Recursive
var zigzagLevelOrder = function (root) {
  let result = [];

  var traverse = function (root, level) {
    if (!root) {
      return;
    }

    if (!result[level]) {
      result[level] = [];
    }

    if (level % 2 === 0) {
      result[level].push(root.val);
    } else {
      result[level].unshift(root.val);
    }

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };

  traverse(root, 0);
  return result;
};

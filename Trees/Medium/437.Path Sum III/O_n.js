//O(n)
var pathSum = function (root, targetSum) {
  let count = 0;
  let map = new Map();
  map.set(0, 1);

  var traverse = function (root, currSum) {
    if (!root) {
      return;
    }

    currSum += root.val;
    if (map.get(currSum - targetSum)) {
      count += map.get(currSum - targetSum);
    }

    map.set(currSum, map.get(currSum) + 1 || 1);
    traverse(root.left, currSum);
    traverse(root.right, currSum);
    map.set(currSum, map.get(currSum) - 1 || 0);
  };

  traverse(root, 0);
  return count;
};

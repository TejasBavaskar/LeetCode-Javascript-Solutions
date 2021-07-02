//O(n) => Using DFS
var widthOfBinaryTree = function (root) {
  let minPos = [];
  let max = Number.MIN_VALUE;

  // From here ---
  while (root.left && !root.right) {
    root = root.left;
  }

  while (root.right && !root.left) {
    root = root.right;
  }
  // ---> till here, code will reach to root which has both left and right branch.
  //Because for root with single branch, max width will always be 1.

  var dfs = function (root, level, currentPos) {
    if (!root) {
      return;
    }

    if (minPos[level] === undefined) {
      minPos[level] = [];
    }

    minPos[level].push(currentPos);
    max = Math.max(max, currentPos - minPos[level][0] + 1);

    dfs(root.left, level + 1, currentPos * 2);
    dfs(root.right, level + 1, currentPos * 2 + 1);
  };

  dfs(root, 1, 1);
  return max;
};

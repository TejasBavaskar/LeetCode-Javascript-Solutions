//O(n) => Using BFS
var widthOfBinaryTree = function (root) {
  // From here ---
  while (root.left && !root.right) {
    root = root.left;
  }

  while (root.right && !root.left) {
    root = root.right;
  }
  // ---> till here, code will reach to root which has both left and right branch.
  //Because for root with single branch, max width will always be 1.

  let queue = [];
  queue.push([root, 1]);  //[root, currentPos]

  let max = Number.MIN_VALUE;

  while (queue.length) {
    let size = queue.length;
    let leftIndex = null;
    let rightIndex = null;

    for (let i = 0; i < size; i++) {
      let [temp, currentPos] = queue.shift();

      if (i === 0) {
        leftIndex = currentPos;
      } else if (i === size - 1) {
        rightIndex = currentPos;
      }

      temp.left && queue.push([temp.left, 2 * currentPos]);
      temp.right && queue.push([temp.right, 2 * currentPos + 1]);
    }

    let diff = 0;

    if (rightIndex && leftIndex) {
      diff = rightIndex - leftIndex + 1;
    } else {
      diff = 1;
    }
    max = Math.max(max, diff);
  }

  return max;
};

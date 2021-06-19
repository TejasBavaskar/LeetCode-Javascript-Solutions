//O(n) => iterative
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  let result = [];

  let queue = [];
  queue.push(root);
  let currentLevel = 0;

  while (queue.length) {
    let size = queue.length;
    let tempArr = [];

    for (let i = 0; i < size; i++) {
      let temp = queue.shift();

      tempArr.push(temp.val);

      temp.left && queue.push(temp.left);
      temp.right && queue.push(temp.right);
    }

    if (currentLevel % 2 === 0) {
      result.push(tempArr);
    } else {
      result.push(tempArr.reverse());
    }

    currentLevel++;
  }

  return result;
};

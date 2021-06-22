//O(n) => iterative
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let size = queue.length;
    let tempArr = [];

    for (let i = 0; i < size; i++) {
      let node = queue.shift();

      tempArr.push(node.val);
      //console.log('Pushing...', node.val)
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(tempArr);
  }

  return result;
};

//------------------ OR ------------------
//O(n) => Recursive
var levelOrder = function (root) {
  let result = [];

  var traverse = function (root, level) {
    if (!root) {
      return;
    }

    if (result[level] === undefined) {
      result[level] = [];
    }
    result[level].push(root.val);

    traverse(root.left, level + 1);
    traverse(root.right, level + 1);
  };

  traverse(root, 0);

  return result;
};

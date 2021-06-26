//O(n)
var verticalOrder = function (root) {
  if (!root) {
    return [];
  }

  let dict = {};
  let queue = [];
  queue.push([root, 0]);

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [node, level] = queue.shift();

      if (!(level in dict)) {
        dict[level] = [];
      }
      dict[level].push(node.val);

      node.left && queue.push([node.left, level - 1]);
      node.right && queue.push([node.right, level + 1]);
    }
  }

  let result = [];
  for ([key, val] of Object.entries(dict)) {
    if (parseInt(key) >= 0) {
      result.push(val);
    } else {
      result.unshift(val);
    }
  }

  return result;
};

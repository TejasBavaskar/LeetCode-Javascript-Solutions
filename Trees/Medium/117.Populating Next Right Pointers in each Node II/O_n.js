//O(n)
var connect = function (root) {
  if (!root) {
    return root;
  }

  let queue = [];
  queue.push(root);

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let temp = queue.shift();

      if (i === size - 1) {
        temp.next = null;
      } else {
        temp.next = queue[0];
      }

      temp.left && queue.push(temp.left);
      temp.right && queue.push(temp.right);
    }
  }

  return root;
};

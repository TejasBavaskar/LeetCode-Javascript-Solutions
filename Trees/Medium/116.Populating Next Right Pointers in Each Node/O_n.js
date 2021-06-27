//O(n)  => Using BFS
var connect = function (root) {
  if (!root) {
    return null;
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

//--------------- OR --------------
//O(n) => in-place changes no extra memory
var connect = function (root) {
  if (!root) {
    return null;
  }

  let prev = null;
  root.next = prev;

  var traverse = function (root) {
    if (!root) {
      return;
    }

    prev = root;
    if (root.left) {
      root.left.next = root.right;
    }

    if (root.right) {
      root.right.next = prev.next && prev.next.left;
    }

    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);
  return root;
};

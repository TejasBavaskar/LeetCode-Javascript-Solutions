//O(n) => iterative using map and queue
var lowestCommonAncestor = function (root, p, q) {
  let map = new Map();

  let queue = [];
  queue.push(root);

  while (queue.length) {
    let temp = queue.pop();

    if (temp.left) {
      map.set(temp.left, temp);
      queue.push(temp.left);
    }

    if (temp.right) {
      map.set(temp.right, temp);
      queue.push(temp.right);
    }
  }

  let mySet = new Set();
  mySet.add(p);

  while (p !== root) {
    p = map.get(p);
    mySet.add(p);
  }

  while (!mySet.has(q)) {
    q = map.get(q);
  }

  return q;
};

//O(n) => Using BFS
//total no. of nodes must be equal to last nodep position 
var isCompleteTree = function (root) {
  let queue = [];
  queue.push([root, 1]);
  let count = 0;
  let lastPos = 1;

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let [temp, pos] = queue.shift();
      count++;

      if (temp.left) {
        lastPos = pos * 2;
        queue.push([temp.left, pos * 2]);
      }
      if (temp.right) {
        lastPos = pos * 2 + 1;
        queue.push([temp.right, pos * 2 + 1]);
      }
    }
  }

  if (count === lastPos) {
    return true;
  }

  return false;
};

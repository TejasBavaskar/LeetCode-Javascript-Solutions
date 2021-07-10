//O(n)
var sumNumbers = function (root) {
  let queue = [];
  queue.push([root, 0]);
  let sum = 0;

  while (queue.length) {
    let [temp, num] = queue.pop();

    if (temp) {
      num = num * 10 + temp.val;

      if (!temp.left && !temp.right) {
        sum += num;
      } else {
        queue.push([temp.right, num]);
        queue.push([temp.left, num]);
      }
    }
  }

  return sum;
};

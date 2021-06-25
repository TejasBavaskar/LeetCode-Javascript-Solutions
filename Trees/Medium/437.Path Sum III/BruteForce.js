//O(n^2)
var pathSum = function (root, targetSum) {
  let count = 0;

  var traverse = function (root, sum) { //n
    if (!root) {
      return 0;
    }

    let tempCount = 0;
    if (root.val === sum) {
      tempCount = 1;
    }

    tempCount += traverse(root.left, sum - root.val);
    tempCount += traverse(root.right, sum - root.val);

    return tempCount;
  };

  var findSum = function (root) { //n
    if (!root) {
      return;
    }

    findSum(root.left);
    findSum(root.right);

    count += traverse(root, targetSum); //for each node calling traverse function
  };

  findSum(root);
  return count;
};

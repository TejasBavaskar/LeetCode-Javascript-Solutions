//O(n) => print left then leaves then right boundary
var boundaryOfBinaryTree = function (root) {
  let result = [];
  result.push(root.val);

  var leftBoundary = function (root) {
    if (!root || (!root.left && !root.right)) {
      return;
    }

    result.push(root.val);

    if (root.left) {
      leftBoundary(root.left);
    } else {
      leftBoundary(root.right);
    }
  };

  var leavesBoundary = function (root) {
    if (!root) {
      return;
    }

    if (!root.left && !root.right) {
      result.push(root.val);
    }

    leavesBoundary(root.left);
    leavesBoundary(root.right);
  };

  var rightBoundary = function (root) {
    if (!root || (!root.left && !root.right)) {
      return;
    }

    if (root.right) {
      rightBoundary(root.right);
    } else {
      rightBoundary(root.left);
    }

    result.push(root.val);
  };

  leftBoundary(root.left);
  leavesBoundary(root.left);
  leavesBoundary(root.right);
  rightBoundary(root.right);

  return result;
};

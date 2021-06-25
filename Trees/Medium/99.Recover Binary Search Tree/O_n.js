//O(n) and space complexity = O(1)
var recoverTree = function (root) {
  let prev, node1, node2;

  var inorderTraverse = function (root) {
    if (!root) {
      return;
    }

    inorderTraverse(root.left);
    if (prev && prev.val > root.val) {
      if (!node1) {
        node1 = prev;
      }
      node2 = root;
    }
    prev = root;

    inorderTraverse(root.right);
  };

  inorderTraverse(root);

  let temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;
};

//---------------- OR ----------------
//O(n)
var recoverTree = function (root) {
  let inorderData = [];
  var inorderTraverse = function (root) {
    if (!root) {
      return;
    }

    inorderTraverse(root.left);
    inorderData.push(root.val);
    inorderTraverse(root.right);
  };

  inorderTraverse(root);

  let node1, node2;
  for (let i = 1; i < inorderData.length; i++) {
    if (inorderData[i - 1] > inorderData[i] && !node1) {
      node1 = inorderData[i - 1];
      node2 = inorderData[i];
    } else if (inorderData[i - 1] > inorderData[i]) {
      node2 = inorderData[i];
    }
  }

  var swapNodes = function (root) {
    if (!root) {
      return;
    }

    if (root.val === node1) {
      root.val = node2;
    } else if (root.val === node2) {
      root.val = node1;
    }

    swapNodes(root.left);
    swapNodes(root.right);
  };

  swapNodes(root);
};

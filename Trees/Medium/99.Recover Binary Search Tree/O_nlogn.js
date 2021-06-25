//O(nlogn) => using sort 
//space complexity = O(n)
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
  let tempInorder = [...inorderData];

  inorderData.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });

  let node1, node2;
  for (let i = 0; i < inorderData.length; i++) {
    if (inorderData[i] !== tempInorder[i]) {
      if (!node1) {
        node1 = tempInorder[i];
      } else if (!node2) {
        node2 = tempInorder[i];
        break;
      }
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

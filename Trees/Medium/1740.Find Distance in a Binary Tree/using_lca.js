//O(n) => 2n
var findDistance = function (root, p, q) {
  var lca = function (root) { //n
    if (!root) {
      return;
    }

    if (root.val === p || root.val === q) {
      return root;
    }

    let left = lca(root.left);
    let right = lca(root.right);

    if (left && right) {
      return root;
    }

    return left || right;
  };

  let lcaNode = lca(root);
  let count = 0;
  let isPFound = false;
  let isQFound = false;

  var dfs = function (root, sum) {  //n
    if (!root) {
      return;
    }

    if (root.val === p || root.val === q) {
      count += sum;
      if (root.val === p) {
        isPFound = true;
      } else if (root.val === q) {
        isQFound = true;
      }
    }

    if (isPFound && isQFound) {
      return;
    }

    dfs(root.left, sum + 1);
    dfs(root.right, sum + 1);
  };

  dfs(lcaNode, 0);

  return count;
};

//O(n)
var lowestCommonAncestor = function (root, p, q) {
  let ans = new TreeNode(-1);

  var findLCA = function (root, p, q) {
    if (!root) {
      return false;
    }

    let left = findLCA(root.left, p, q);
    let right = findLCA(root.right, p, q);

    if (root === p || root === q) {
      if ((root && left) || (root && right)) {
        ans = root;
      }
      return root;
    }

    if (left && right) {
      ans = root;
    }

    return left || right;
  };

  findLCA(root, p, q);
  return ans;
};

//--------------------- OR -----------------------
//O(n)
var lowestCommonAncestor = function (root, p, q) {
  var findLCA = function (root, p, q) {
    if (!root) {
      return null;
    }

    if (root === p || root === q) {
      return root;
    }

    let left = findLCA(root.left, p, q);
    let right = findLCA(root.right, p, q);

    if (left && right) {
      return root;
    }
    return left || right;
  };

  return findLCA(root, p, q);
};

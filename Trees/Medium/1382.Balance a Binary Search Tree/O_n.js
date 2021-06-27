//O(n) => using inorder traversal
var balanceBST = function (root) {
  let inorderData = [];

  var inorder = function (root) {
    if (!root) {
      return;
    }

    inorder(root.left);
    inorderData.push(root.val);
    inorder(root.right);
  };

  inorder(root);

  var buildTree = function (start, end) {
    if (start >= end) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(inorderData[mid]);
    root.left = buildTree(start, mid);
    root.right = buildTree(mid + 1, end);

    return root;
  };

  let tree = buildTree(0, inorderData.length);
  return tree;
};

//O(n) => ignoring complexity of indexOf() or else use hashmap to store index of inorder elements
var buildTree = function (preorder, inorder) {
  let preIndex = 0;
  var construct = function (preorder, left, right) {
    if (left > right) {
      return null;
    }

    let rootVal = preorder[preIndex];
    preIndex++;

    let root = new TreeNode(rootVal);
    root.left = construct(preorder, left, inorder.indexOf(rootVal) - 1);
    root.right = construct(preorder, inorder.indexOf(rootVal) + 1, right);

    return root;
  };

  return construct(preorder, 0, preorder.length - 1);
};

//----------------- OR ------------------
//O(n)
var buildTree = function (preorder, inorder) {
  let preIndex = 0;
  var construct = function (preorder, inorder) {
    if (preorder.length === 0) {
      return null;
    }

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);
    let pos = inorder.indexOf(rootVal);

    root.left = construct(preorder.slice(1, pos + 1), inorder.slice(0, pos));
    root.right = construct(preorder.slice(pos + 1), inorder.slice(pos + 1));

    return root;
  };

  return construct(preorder, inorder);
};

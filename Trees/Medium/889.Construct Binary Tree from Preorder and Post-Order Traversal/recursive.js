//O(n)
var constructFromPrePost = function (pre, post) {
  var traverse = function (pre, post) {
    if (pre.length === 0) {
      return null;
    }

    if (pre.length === 1) {
      return new TreeNode(pre[0], null, null);
    }

    let node = new TreeNode(pre[0], null, null);
    let leftVal = pre[1];
    let leftValIndex = post.indexOf(leftVal);

    node.left = traverse(
      pre.slice(1, leftValIndex + 2),
      post.slice(0, leftValIndex + 1)
    );
    node.right = traverse(
      pre.slice(leftValIndex + 2),
      post.slice(leftValIndex + 1)
    );
    return node;
  };

  return traverse(pre, post);
};

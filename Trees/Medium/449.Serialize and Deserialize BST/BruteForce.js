/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = "";
  if (!root) {
    return str;
  }
  var dfs = function (root) {
    if (!root) {
      str += "#,";
      return;
    }

    str += root.val;
    str += ",";
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data.length === 0) {
    return null;
  }

  let index = 0;
  data = data.split(",");

  var buildTree = function () {
    if (data[index] === "#") {
      return null;
    }

    let root = new TreeNode(data[index]);
    if (index + 1 < data.length) {
      index++;
      root.left = buildTree();
    }

    if (index + 1 < data.length) {
      index++;
      root.right = buildTree();
    }

    return root;
  };

  return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  let inorder = [];

  var traverse = function (root) {
    if (!root) {
      return;
    }

    traverse(root.left);
    inorder.push(root.val);
    traverse(root.right);
  };

  traverse(root);
  this.inorder = inorder;
  this.index = -1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.index++;
  return this.inorder[this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.inorder[this.index + 1] !== undefined) {
    return true;
  }
  return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

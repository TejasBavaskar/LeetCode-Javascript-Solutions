//This code is for understanding O_n.js file code
var flipMatchVoyage = function (root, voyage) {
  let index = 0;
  let result = [];
  var swap = function (root, parent) {
    if (!root) {
      return;
    }

    if (root.val === voyage[index]) {
      index++;
      swap(root.left, root);
      swap(root.right, root);

      return;
    } else {
      if (!parent || !parent.right || parent.right.val !== voyage[index]) {
        if (!result.includes(-1)) {
          result = [-1];
        }
        return;
      }

      if (result.includes(-1)) {
        return;
      }
      result.push(parent.val);
      let temp = parent.right;
      parent.right = root;
      parent.left = temp;
      root = parent.left;

      index++;
      swap(root.left, root);
      swap(root.right, root);

      return;
    }
  };

  swap(root, null);
  return result;
};

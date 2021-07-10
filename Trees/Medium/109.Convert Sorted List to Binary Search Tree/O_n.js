//O(n)
var sortedListToBST = function (head) {
  let arr = [];
  let temp = head;
  while (temp) {
    arr.push(temp);
    temp = temp.next;
  }

  var buildTree = function (start, end) {
    if (start > end) {
      return null;
    }

    let middle = Math.floor((start + end) / 2);
    let root = new TreeNode(arr[middle].val);
    root.left = buildTree(start, middle - 1);
    root.right = buildTree(middle + 1, end);

    return root;
  };

  return buildTree(0, arr.length - 1);
};

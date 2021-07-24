//O(n)  => Using Array
//Space Complexity: O(n)
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

//--------------- OR --------------
//O(n)
var sortedListToBST = function (head) {
  if (!head) {
    return head;
  }

  var dfs = function (start, end) {
    if (start > end) {
      return null;
    }

    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode();
    root.left = dfs(start, mid - 1);

    root.val = head.val;
    head = head.next;

    root.right = dfs(mid + 1, end);
    return root;
  };

  let temp = head;
  let count = 0;

  while (temp) {
    count++;
    temp = temp.next;
  }

  return dfs(0, count - 1);
};

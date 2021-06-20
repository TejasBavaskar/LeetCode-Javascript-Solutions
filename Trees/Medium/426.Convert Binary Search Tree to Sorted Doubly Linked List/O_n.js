//O(n)  => using inorder
var treeToDoublyList = function (root) {
  let inorderData = [];

  var inorder = function (root) {
    if (!root) {
      return;
    }

    inorder(root.left);
    inorderData.push(root);
    inorder(root.right);
  };

  inorder(root);

  let totalNodes = inorderData.length;
  for (let i = 0; i < totalNodes; i++) {
    inorderData[i].right = inorderData[((i % totalNodes) + 1) % totalNodes];

    if (i === 0) {
      inorderData[i].left = inorderData[totalNodes - 1];
    } else {
      inorderData[i].left = inorderData[i - 1];
    }
  }

  return inorderData[0];
};

//------------------------ OR --------------------------
//O(n) => Using inorder two pointers
var treeToDoublyList = function (root) {
  if (!root) {
    return;
  }

  let head = null;
  let tail = null;

  var inorder = function (root) {
    if (!root) {
      return;
    }

    inorder(root.left);

    if (!head) {
      head = root;
    } else {
      root.left = tail;
      tail.right = root;
    }
    tail = root;

    inorder(root.right);
  };

  inorder(root);

  head.left = tail;
  tail.right = head;

  return head;
};

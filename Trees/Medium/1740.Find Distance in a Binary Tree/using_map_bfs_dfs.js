//O(n) => 3n
var findDistance = function (root, p, q) {
  let dict = {};
  var fillDict = function (root) {  //n
    if (!root) {
      return;
    }
    if (!(root.val in dict)) {
      dict[root.val] = [];
    }

    if (root.left) {
      dict[root.val].push(root.left);
      dict[root.left.val] = [];
      dict[root.left.val].push(root);
    }

    if (root.right) {
      dict[root.val].push(root.right);
      dict[root.right.val] = [];
      dict[root.right.val].push(root);
    }

    fillDict(root.left);
    fillDict(root.right);
  };

  fillDict(root);

  var dfs = function (root) { //n
    if (!root) {
      return;
    }

    if (root.val === p || root.val === q) {
      return root;
    }

    return dfs(root.left) || dfs(root.right);
  };

  let node = dfs(root);

  let queue = [];
  queue.push([node, 0]);

  let visited = [];
  while (queue.length) {  //n
    let [temp, level] = queue.shift();
    visited.push(temp.val);
    let arr = dict[temp.val];
    for (let i = 0; i < arr.length; i++) {
      if (!visited.includes(arr[i].val)) {
        queue.push([arr[i], level + 1]);
      } else {
        continue;
      }

      if (arr[i].val === p || arr[i].val === q) {
        return level + 1;
      }
    }
  }

  return 0;
};

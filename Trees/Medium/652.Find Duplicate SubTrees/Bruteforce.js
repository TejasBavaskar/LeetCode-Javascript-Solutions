//O(n^3) => Time Limit Exceed
var findDuplicateSubtrees = function (root) {
  let arr = [];
  var dfs = function (root) { //n
    if (!root) {
      return;
    }

    arr.push(root);
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  let result = [];
  for (let i = 0; i < arr.length; i++) {  //n
    let node = arr[i];
    for (let j = i + 1; j < arr.length; j++) {  //n
      if (node.val === arr[j].val) {
        if (JSON.stringify(node) === JSON.stringify(arr[j])) {
          let flag = false;
          for (let k = 0; k < result.length; k++) { //n
            if (JSON.stringify(result[k]) === JSON.stringify(arr[j])) {
              flag = true;
              break;
            }
          }

          if (!flag) {
            result.push(arr[j]);
          }
        }
      }
    }
  }

  return result;
};

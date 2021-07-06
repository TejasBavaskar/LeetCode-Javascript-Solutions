//O(n^2) => Using Hashmap
var findDuplicateSubtrees = function (root) {
  let arr = [];
  let map = new Map();
  let resultMap = new Map();
  var dfs = function (root) {
    //n
    if (!root) {
      return;
    }

    if (!map.has(JSON.stringify(root))) {
      //n
      map.set(JSON.stringify(root), root);
    } else {
      if (!resultMap.has(JSON.stringify(root))) {
        resultMap.set(JSON.stringify(root), root);
      }
    }
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return Array.from(resultMap.values());
};

//---------------- OR ----------------
var findDuplicateSubtrees = function (root) {
  let seen = {};
  let ans = [];
  let visited = new Set();

  var dfs = function (root) {
    if (!root) {
      return;
    }

    let temp = JSON.stringify(root);
    if (!visited.has(temp) && temp in seen) {
      ans.push(root);
      visited.add(temp);
    }
    seen[temp] = root;
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);
  return ans;
};

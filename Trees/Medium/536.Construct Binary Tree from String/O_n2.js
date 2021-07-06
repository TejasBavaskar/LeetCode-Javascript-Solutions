//O(n^2) => because of slice function
var str2tree = function (s) {
  var buildTree = function (str) {
    if (!str) {
      return null;
    }

    let midPoint = -1;
    let open = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
        open++;
      } else if (str[i] === ")") {
        open--;
      } else if (typeof str[i] === "number" || "-") {
        continue;
      }

      if (open === 0) {
        midPoint = i;
        break;
      }
    }

    let root = null;
    let rootValue = -1;
    if (!str.includes("(")) {
      rootValue = Number(str);
      root = new TreeNode(rootValue);
    } else {
      rootValue = Number(str.slice(0, str.indexOf("(")));
      root = new TreeNode(rootValue);

      root.left = buildTree(str.slice(str.indexOf("(") + 1, midPoint));
      root.right = buildTree(str.slice(midPoint + 2, str.length - 1));
    }
    return root;
  };

  return buildTree(s);
};

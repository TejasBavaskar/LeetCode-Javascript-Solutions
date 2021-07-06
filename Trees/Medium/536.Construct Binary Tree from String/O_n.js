//O(n)
var str2tree = function (s) {
  var dfs = function (str, start, end) {
    if (start > end) {
      return null;
    }

    let temp = "";
    let index = start;

    while (index <= end) {
      if (!isNaN(str[index]) || str[index] === "-") {
        temp += str[index];
      } else if (str[index] === "(" || str[index] === ")") {
        break;
      }
      index++;
    }

    let root = new TreeNode(Number(temp));

    start = index + 1;
    let open = 0;
    while (index <= end) {
      if (str[index] === "(") {
        open++;
      } else if (str[index] === ")") {
        open--;
      } else {
        index++;
        continue;
      }

      if (open === 0) {
        break;
      }
      index++;
    }

    root.left = dfs(str, start, index - 1);
    root.right = dfs(str, index + 2, end - 1);

    return root;
  };
  return dfs(s, 0, s.length - 1);
};

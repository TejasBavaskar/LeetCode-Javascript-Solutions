//O(n^2)  => using DFS
//Reference: https://www.youtube.com/watch?v=S5UUvCTM0V4
var findCircleNum = function (isConnected) {
  let row = isConnected.length;
  let col = isConnected[0].length;
  let visited = [];
  let count = 0;

  var dfs = function (i) {
    visited.push(i);

    for (let j = 0; j < col; j++) {
      if (isConnected[i][j] === 1 && !visited.includes(j)) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < row; i++) {
    if (!visited.includes(i)) {
      count++;
      dfs(i);
    }
  }

  return count;
};

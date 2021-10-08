//O(m*n)
var hasPath = function (maze, start, destination) {
  let row = maze.length;        //m
  let col = maze[0].length;     //n

  let visited = Array(row)
    .fill()
    .map((item) => Array(col).fill(0));

  var dfs = function (i, j) {
    if (visited[i][j] === 1) {
      return false;
    }

    if (i === destination[0] && j === destination[1]) {
      return true;
    }

    visited[i][j] = 1;
    let l = j - 1;
    let r = j + 1;
    let u = i - 1;
    let d = i + 1;

    while (u >= 0 && maze[u][j] !== 1) {
      u--;
    }
    if (dfs(u + 1, j)) {
      return true;
    }

    while (r < col && maze[i][r] !== 1) {
      r++;
    }
    if (dfs(i, r - 1)) {
      return true;
    }

    while (d < row && maze[d][j] !== 1) {
      d++;
    }
    if (dfs(d - 1, j)) {
      return true;
    }

    while (l >= 0 && maze[i][l] !== 1) {
      l--;
    }
    if (dfs(i, l + 1)) {
      return true;
    }

    return false;
  };

  return dfs(start[0], start[1]);
};

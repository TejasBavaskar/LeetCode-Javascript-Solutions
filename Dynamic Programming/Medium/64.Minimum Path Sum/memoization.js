//O(m*n)
var minPathSum = function (grid) {
  let row = grid.length - 1;      //m
  let col = grid[0].length - 1;   //n

  let map = new Map();

  var solve = function (i, j) {
    if (i === row && j === col) {
      return grid[i][j];
    }
    let key = i + " " + j;
    if (map.has(key)) {
      return map.get(key);
    }

    let temp1 = Number.MAX_SAFE_INTEGER;
    let temp2 = Number.MAX_SAFE_INTEGER;

    if (i + 1 <= row) {
      temp1 = solve(i + 1, j);
    }
    if (j + 1 <= col) {
      temp2 = solve(i, j + 1);
    }

    let ans = grid[i][j] + Math.min(temp1, temp2);
    map.set(key, ans);
    return ans;
  };

  return solve(0, 0);
};

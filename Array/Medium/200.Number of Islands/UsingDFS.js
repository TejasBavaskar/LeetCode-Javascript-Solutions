//O(m*n)
var numIslands = function (grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  var findIsland = function (p, q) {
    if (grid[p][q] === "0" || grid[p][q] === "2") {
      return false;
    }

    let nodes = [];
    nodes.push([p, q]);
    while (nodes.length) {
      let [i, j] = nodes.shift();
      if (grid[i][j] === "1") {
        grid[i][j] = "2";
        if (grid[i - 1] && grid[i - 1][j] === "1") {
          nodes.unshift([i - 1, j]);
        }
        if (grid[i][j - 1] === "1") {
          nodes.unshift([i, j - 1]);
        }
        if (grid[i + 1] && grid[i + 1][j] === "1") {
          nodes.unshift([i + 1, j]);
        }
        if (grid[i][j + 1] === "1") {
          nodes.unshift([i, j + 1]);
        }
      }
    }
    return true;
  };

  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (findIsland(i, j)) {
        count++;
      }
    }
  }
  return count;
};

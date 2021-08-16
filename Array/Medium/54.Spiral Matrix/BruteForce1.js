//O(n)
var spiralOrder = function (matrix) {
  let result = [];
  let row = matrix.length;
  let col = matrix[0].length;

  var solve = function (i, j, dir) {
    result.push(matrix[i][j]);
    matrix[i][j] = 101;
    if (dir === "right") {
      if (j + 1 < col && matrix[i][j + 1] !== 101) {
        solve(i, j + 1, "right");
      } else if (i + 1 < row && matrix[i + 1][j] !== 101) {
        solve(i + 1, j, "down");
      }
    } else if (dir === "down") {
      if (i + 1 < row && matrix[i + 1][j] !== 101) {
        solve(i + 1, j, "down");
      } else if (j - 1 >= 0 && matrix[i][j - 1] !== 101) {
        solve(i, j - 1, "left");
      }
    } else if (dir === "left") {
      if (j - 1 >= 0 && matrix[i][j - 1] !== 101) {
        solve(i, j - 1, "left");
      } else if (i - 1 >= 0 && matrix[i - 1][j] !== 101) {
        solve(i - 1, j, "up");
      }
    } else if (dir === "up") {
      if (i - 1 >= 0 && matrix[i - 1][j] !== 101) {
        solve(i - 1, j, "up");
      } else if (j + 1 < col && matrix[i][j + 1] !== 101) {
        solve(i, j + 1, "right");
      }
    }
  };

  solve(0, 0, "right");
  return result;
};

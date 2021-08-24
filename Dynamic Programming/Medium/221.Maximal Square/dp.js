//O(m*n)
//Reference: https://www.youtube.com/watch?v=o03nAp_wZmw
var maximalSquare = function (matrix) {
  let row = matrix.length;        //m
  let col = matrix[0].length;     //n

  let max = 0;
  for (let i = 0; i < col; i++) {       //n
    if (matrix[0][i] === "1") {
      max = 1;
      break;
    }
  }
  for (let i = 0; i < row; i++) {       //m
    if (matrix[i][0] === "1") {
      max = 1;
      break;
    }
  }

  for (let i = 1; i < row; i++) {       //m
    for (let j = 1; j < col; j++) {     //n
      if (matrix[i][j] !== "0") {
        matrix[i][j] =
          Math.min(
            parseInt(matrix[i - 1][j]),
            parseInt(matrix[i][j - 1]),
            parseInt(matrix[i - 1][j - 1])
          ) + 1;
      }
      max = Math.max(max, matrix[i][j]);
    }
  }

  return max * max;
};

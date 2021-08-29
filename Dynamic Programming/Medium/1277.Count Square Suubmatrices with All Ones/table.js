//O(m*n)
var countSquares = function (matrix) {
  let row = matrix.length; //m
  let col = matrix[0].length; //n
  let sum = 0;

  for (let i = 1; i < row; i++) {
    sum += matrix[i][0];
  }
  for (let i = 0; i < col; i++) {
    sum += matrix[0][i];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] =
          Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i][j - 1]) +
          1;
        sum += matrix[i][j];
      }
    }
  }

  return sum;
};

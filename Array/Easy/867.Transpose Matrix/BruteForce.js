//O(n^2)
var transpose = function(matrix) {
  let result = [];
  let row = matrix.length;
  let col = matrix[0].length;
  
  for(let i=0; i<row; i++) {
      for(let j=0; j<col; j++) {
          if(!Array.isArray(result[j])) {
              result[j] = [];
          }
          result[j][i] = matrix[i][j];
      }
  }
  return result;
};
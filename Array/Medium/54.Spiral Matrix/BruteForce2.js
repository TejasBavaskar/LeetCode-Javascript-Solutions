//O(n)
var spiralOrder = function(matrix) {
  let result = [];
  
  let rowStart = 0;
  let rowEnd = matrix.length-1;
  
  let colStart = 0;
  let colEnd = matrix[0].length-1;
  
  while(rowStart <= rowEnd && colStart <= colEnd) {
      for(let k=colStart; k<=colEnd; k++) {
          result.push(matrix[rowStart][k]);
      }
      rowStart++;
      
      for(let k=rowStart; k<=rowEnd; k++) {
          result.push(matrix[k][colEnd]);
      }
      colEnd--;
      
      if(rowStart <= rowEnd) {
          for(let k=colEnd; k>=colStart; k--) {
              result.push(matrix[rowEnd][k]);
          }
          rowEnd--;
      }
      
      if(colStart <= colEnd) {
          for(let k=rowEnd; k>=rowStart; k--) {
              result.push(matrix[k][colStart]);
          }
          colStart++;
      }
  }
  
  return result;
};
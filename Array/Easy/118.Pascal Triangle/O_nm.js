//O(n^2)
var generate = function(numRows) {
  let result = [[1]];
  for(let i=1; i< numRows; i++) {
      let temp = [];
       temp.push(1);
      if(result[i-1].length > 1) {
          for(let j=0; j<result[i-1].length-1; j++) {
              temp.push(result[i-1][j] + result[i-1][j+1]);
          }
      }
      temp.push(1);
      
      result.push(temp);
  }
  console.log(result);
  return result;
  
};
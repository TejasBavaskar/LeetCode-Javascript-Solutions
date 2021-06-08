//O(n*m)  => n = input arr length, m = length of binary representation
var countBits = function(n) {
  let result = [];
  for(let i=0; i<=n; i++) {
      let temp = i.toString(2).split('').reduce((sum, item) => {
          sum += parseInt(item);
          return sum;
      }, 0);
      
      result.push(temp);
  }
  
  return result;
};
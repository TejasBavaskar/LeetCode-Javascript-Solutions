//O(max(m,n))
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = [];
  let carry = 0;
  
  while(i>=0 || j>=0) {
      let num1 = a[i] === undefined ? '0' : a[i];
      let num2 = b[j] === undefined ? '0' : b[j];
      
      if(num1 === '1' && num2 === '1') {
          if(carry) {
              result.push('1');
          } else {
              result.push('0');
          }
          carry = 1;
          
      } else if(num1 === '0' && num2 === '0') {
          if(carry) {
              result.push('1');
              carry = 0;
          } else {
              result.push('0');
          }
          
      } else {
          if(carry) {
              result.push('0');
              carry = 1;
          } else {
              result.push('1');
              carry = 0;
          }
          
      }
      i--;
      j--;
  }
  
  if(carry) {
       result.push('1');
  }
  
  return result.reverse().join('');
};
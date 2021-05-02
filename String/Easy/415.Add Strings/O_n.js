//O(n)
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = [];
  
  while(i>=0 || j>=0) {
      let n1 = num1[i] >=0 ? num1[i] - '0' : 0;
      let n2 = num2[j] >=0 ? num2[j] - '0' : 0;
      
      let sum = n1 + n2;
      let base = sum % 10;
      result.push((base + carry) % 10);
      carry = Math.floor((sum+carry) / 10);
      
      i--;
      j--;
  }
  
  if(carry !== 0) {
     result.push(carry) 
  }
  
  return result.reverse().join('');
};
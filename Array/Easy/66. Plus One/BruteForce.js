//O(n)
var plusOne = function(digits) {
  let carry = 0;
  for(let i=digits.length-1; i>=0; i--) {
      let sum = digits[i] + 1;
      if(sum < 10) {
          digits[i] = sum;
          carry = 0;
          return digits;
      }

      carry = 1;
      digits[i] = 0;
  }
  if(carry) {
      digits.unshift(1);
  }
  return digits;
};
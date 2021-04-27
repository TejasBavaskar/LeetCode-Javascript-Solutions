//O(n)
var fib = function(n) {
  if(n <= 1)
      return n;
  let prev = 0;
  let current = 1;
  let sum = 0;
  
  while(n >= 2) {
      sum = current + prev;
      prev = current;
      current = sum;
      n--;
  }
  
  return sum; 
};
//O(mn)
var rotatedDigits = function(n) {
  let count = 0;
  
  for(let i=1; i<=n; i++) { // run n times
      let num = i;
      let isValid = false;
      while(num) {  // run times m = size of that number (say 3 digit number then m = 3) 
          let tempNum = num % 10;
          if(tempNum === 2 || tempNum === 5 || tempNum === 6 || tempNum === 9) {
              isValid = true;
          } else if(tempNum === 3 || tempNum === 4 || tempNum === 7) {
              isValid = false;
              break;
          }
          
          num = Math.floor(num / 10);
      }
      
      if(isValid) {
          count++;
      }   
  } 
  return count; 
};
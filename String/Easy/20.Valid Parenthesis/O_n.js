//O(n)
var isValid = function(s) {
  if(s.length % 2 !== 0) {
      return false;
  }
  let stack = [];
  let arr = s.split('');
  
  for(let i=0; i<arr.length; i++) {
      if(arr[i] === `(` || arr[i] === `{` || arr[i] === `[`) {
          stack.push(arr[i]);
      } else {
          switch(arr[i]) {
              case `)`:
                  if(stack[stack.length-1] === `(`) {
                      stack.pop();
                  } else {
                      return false;
                  }
                  break;
              case `}`:
                  if(stack[stack.length-1] === `{`) {
                      stack.pop();
                  } else {
                      return false;
                  }
                  break;
              case `]`:
                  if(stack[stack.length-1] === `[`) {
                      stack.pop();
                  } else {
                      return false;
                  }
                  break;
          }
      }
  }
  
  return stack.length === 0;
};
//O(n)
var modifyString = function(s) {
  for(let i=0; i<s.length; i++) {
      if(s[i] === '?') {
          let replace = '';
          if(s[i-1] !== 'a' && s[i+1] !== 'a') {
              replace = 'a';
          } else if(s[i-1] !== 'b' && s[i+1] !== 'b') {
              replace = 'b';
          } else {
              replace = 'c';
          }
          
          s = s.slice(0, i) + replace + s.slice(i+1);
      }
  }
  
  return s;
};

// ----------------- OR --------------------
var modifyString = function(s) {
  let i = 0;
  
  while(i < s.length) {
      if(s[i] === '?' && i === 0) {
          let num = 97;
          while(num <= 123) {
              if(s[i+1] !== String.fromCharCode(num.toString())) {
                  s = s.replace('?', String.fromCharCode(num.toString()));
                  break;
              }
              num++;
          }
      } else if(s[i] === '?' && i === s.length - 1) {
          let num = 97;
          while(num <= 123) {
              if(s[i-1] !== String.fromCharCode(num.toString())) {
                  s = s.replace('?', String.fromCharCode(num.toString()));
                  break;
              }
              num++;
          }
      } else if(s[i] === '?') {
          let num = 97;
          while(num <= 123) {
              if(s[i-1] !== String.fromCharCode(num.toString()) 
                && s[i+1] !== String.fromCharCode(num.toString())) {
                  s = s.replace('?', String.fromCharCode(num.toString()));
                  break;
              }
              num++;
          }
      }
      i++;
  }
  return s;
};
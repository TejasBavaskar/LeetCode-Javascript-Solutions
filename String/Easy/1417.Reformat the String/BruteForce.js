//O(max(m ,n))
var reformat = function(s) {
  let letters = [];
  let digits = [];
  
  letters = s.split('').filter(item => {  // m length
      return item.match(/[a-z]/g);
  });

  digits = s.split('').filter(item => {  // n length
      return item.match(/[0-9]/g);
  });
  
  if(Math.abs(letters.length - digits.length) > 1) {
      return '';
  }
  
  let result = '';
  
  let i = 0;
  let j = 0;
  
  let isLettersMin = letters.length <= digits.length ? true : false;
  
  while(i < letters.length || j < digits.length) {  //O(max(m, n))
      if(isLettersMin) {
          if(digits[j]) {
              result += digits[j];
          }
          
          if(letters[i]) {
              result += letters[i];
          }
      } else {
          if(letters[i]) {
              result += letters[i];
          }
          if(digits[j]) {
              result += digits[j];
          }
      }
      i++;
      j++;
  }

  return result;
};
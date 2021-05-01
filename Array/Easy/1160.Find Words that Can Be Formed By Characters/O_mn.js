//O(mn)
var countCharacters = function(words, chars) {
  let sum = 0;
  for(let i=0; i<words.length; i++) {
      let checkChars = chars;
      let flag = false;
      for(let j=0; j<words[i].length; j++) {
          if(!checkChars.includes(words[i][j])) {
              flag = false;
              break;
          }
          
          checkChars = checkChars.replace(words[i][j], '');
          flag = true;
      }

      if(flag) {
          console.log(words[i].length, i)
          sum += words[i].length;
      }
  }
  return sum;
};
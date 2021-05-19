//O(n)
var validWordAbbreviation = function(word, abbr) {
  if(abbr.length > word.length) {
      return false;
  }
  
  let j = 0;
  let num = '';
  
  for(let i=0; i<abbr.length; i++) {
      if(abbr[i] === word[j]) {
          j++;
      } else if(abbr[i].match(/0/g) && num === '') {
          return false;
      }
      else if(abbr[i].match(/[0-9]/g)) {
          num += abbr[i];
          if(! (abbr[i+1] && abbr[i+1].match(/[0-9]/g))) {
              j += parseInt(num); 
              if(j > word.length) {
                  console.log(j)
                  return false;
              }
              num = '';
          }
      } else {
          return false;
      }
  }
  
  if(j < word.length) {
      return false;
  }
  
  return true;
};
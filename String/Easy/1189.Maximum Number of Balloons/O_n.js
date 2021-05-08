//O(n)
var maxNumberOfBalloons = function(text) {
  let dict = {
      'b': 0,
      'a': 0,
      'l': 0,
      'o': 0,
      'n': 0,
  };
  
  for(let i=0; i<text.length; i++) {
      if(text[i] in dict) {
          dict[text[i]]++;
      } else {
          dict[text[i]] = 1;
      }
  }
  
 return Math.min(dict['b'], dict['a'], Math.floor(dict['l']/2), Math.floor(dict['o']/2), dict['n']);
};
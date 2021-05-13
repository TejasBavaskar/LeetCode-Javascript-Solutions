//O(n)
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.toLowerCase().replace(/[^a-z]/g, ' ').split(/[\s,]+/g);
  
  paragraph = paragraph.filter(item => !banned.includes(item));
   
  let dict = {};
  paragraph.forEach(word => {
      if(word in dict) {
          dict[word]++;
      } else {
          dict[word] = 1;
      }
  });
  
  let max = Number.MIN_VALUE;
  let res = '';
  for([key, val] of Object.entries(dict)) {
      if(val > max) {
          max = val;
          res = key;
      }
  }
  
  return res;
};